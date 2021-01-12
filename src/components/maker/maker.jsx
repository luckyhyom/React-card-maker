import React, { useCallback, useEffect,useState,memo } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editer from '../editer/editer';
import Preview from '../preview/preview';

const Maker = memo(({authService}) => {

  const [cards,setCards] = useState({
    1: {
      id:'1',
      name: 'Hyomin',
      company: 'Amazon',
      theme: 'black',
      title: 'Software Engineer',
      email: 'gyals0386@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    2: {
      id:'2',
      name: 'Hyomin2',
      company: 'Amazon',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'gyals0386@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    3: {
      id:'3',
      name: 'Hyomin3',
      company: 'Amazon',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gyals0386@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'logo.png'
    }
  });

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
          if (!user) {
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
        }

        
      )

      const addCard = useCallback(
        (card) => {
          const update = {...cards,[card.id]:card};
          setCards(update);
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
                onUpdate={updateCard} />
                <Preview cards={cards}/>
            </section>
        <Footer/>
        </section>
    );

});

export default Maker;
