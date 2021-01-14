import React, { useCallback, useEffect,useState,memo } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editer from '../editer/editer';
import Preview from '../preview/preview';


const Maker = memo(({FileInput,authService,cardRepository}) => {

  const historyState = useHistory().state;
  const [userId,setUserId] = useState(`${historyState&&historyState.id}`);

  const [cards,setCards] = useState({});

     // 객체형태
    // 1: {
    //   id:'1',
    //   name: 'Hyomin',
    //   company: 'Amazon',
    //   theme: 'black',
    //   title: 'Software Engineer',
    //   email: 'gyals0386@gmail.com',
    //   message: 'go for it',
    //   fileName: '',
    //   fileURL: null
    // },
    // 2: {
    //   id:'2',
    //   name: 'Hyomin2',
    //   company: 'Amazon',
    //   theme: 'colorful',
    //   title: 'Software Engineer',
    //   email: 'gyals0386@gmail.com',
    //   message: 'go for it',
    //   fileName: '',
    //   fileURL: null
    // },
    // 3: {
    //   id:'3',
    //   name: 'Hyomin3',
    //   company: 'Amazon',
    //   theme: 'light',
    //   title: 'Software Engineer',
    //   email: 'gyals0386@gmail.com',
    //   message: 'go for it',
    //   fileName: '',
    //   fileURL: ''
    // }

    // 배열 일 때
    // const [cards,setCards] = useState([
    //     {
    //       id:'1',
    //       name: 'Hyomin',
    //       company: 'Amazon',
    //       theme: 'black',
    //       title: 'Software Engineer',
    //       email: 'gyals0386@gmail.com',
    //       message: 'go for it',
    //       fileName: 'ellie',
    //       fileURL: null
    //     },
    //     {
    //       id:'2',
    //       name: 'Hyomin2',
    //       company: 'Amazon',
    //       theme: 'colorful',
    //       title: 'Software Engineer',
    //       email: 'gyals0386@gmail.com',
    //       message: 'go for it',
    //       fileName: 'ellie',
    //       fileURL: null
    //     },
    //     {
    //       id:'3',
    //       name: 'Hyomin3',
    //       company: 'Amazon',
    //       theme: 'light',
    //       title: 'Software Engineer',
    //       email: 'gyals0386@gmail.com',
    //       message: 'go for it',
    //       fileName: 'ellie',
    //       fileURL: 'logo.png'
    //     }
    //   ]);

    const history = useHistory();

    const onLogout = () => {
        console.log('log');
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
          if (user) {
            setUserId(user.uid);
          }else{
            history.push('/');
          }
        });
      });

      const deleteCard = useCallback(
        (card) => {
          // const result = cards.filter(item=>item.id!==card.id);
          const result = {...cards};
          delete result[card.id];
          setCards(result);
          cardRepository.deleteCard(userId,card);
        }

        
      )

      const addCard = useCallback(
        (card) => {
          // 데이터를 UI로 표현
          const update = {...cards,[card.id]:card};
          setCards(update);
          // 데이터를 실제로 DB에 저장
          cardRepository.addCard(userId,card);
        }
      )

      const updateCard = 
        (card) => {

          // 1
          // console.log(card);
          // console.log(cards[card.id]);
          // const update = cards.map(item=>{
          //   if(item.id===card.id){
          //     return card;
          //   }
          //   return item
          // });
          // const update = cards[card.id];

          // 2
          // const update = {...cards,[card.id]:card};
          // setCards(update);

          //3
          // setCards(cards=>{
          //   const update = {...cards,[card.id]:card};
          //   return update;
          // });

          // 3(2)

          setCards(cards=>{
            const update = {...cards};
            update[card.id] = card;
            return update;
          });
        }
      
      

    return (<section className={styles.maker}>
        <Header onLogout={onLogout} />
            <section className={styles.sectionBox}>
                <Editer cards={cards} onDelete={deleteCard} onAdd={addCard}
                onUpdate={updateCard}
                FileInput={FileInput}
                />
                <Preview cards={cards}/>
            </section>
        <Footer/>
        </section>
    );

});

export default Maker;
