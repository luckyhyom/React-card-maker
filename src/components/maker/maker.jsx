import React, { useEffect,useState,memo } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editer from '../editer/editer';
import Preview from '../preview/preview';


const Maker = memo(({FileInput,authService,cardRepository}) => {

  const historyState = useHistory().state;
  const [userId,setUserId] = useState(`${historyState&&historyState.id}`);
  const [cards,setCards] = useState({

  });

    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(()=>{
      if(!userId){
        return;
      }
      // 1. (cards)=>{~~}이런 함수를 넣어주는거임. cards에는 뭐가 들어올지 아직 모르는 상태
      // 2. stopSync = const stopSync =  cardRepository.syncCard(userId,(cards)=>{setCard(cards)});
      //            -> 이미 안의 함수가 실행이 되고 return된 함수를 값으로 가지고 있다. ()=>ref.off
      //       만약 const stopSync = cardRepository.syncCard; 이렇게 정의하면
      //              stopSync(userId,(cards)=>{.....}) 이렇게 사용해줘야함.
      const stopSync = cardRepository.syncCard(userId,(cards)=>{setCards(cards)});
      return () => stopSync();
    },[cardRepository,userId]);

    useEffect(() => {
        authService.onAuthChange(user => {
          if (user) {
            setUserId(user.uid);
          }else{
            history.push('/');
          }
        });
      },[userId,authService,history]);

      const deleteCard = 
        (card) => {
          // const result = cards.filter(item=>item.id!==card.id);
          const result = {...cards};
          delete result[card.id];
          setCards(result);
          cardRepository.deleteCard(userId,card);
        }


      const createOrUpdateCard = 
        (card) => {
          setCards(cards=>{
            const update = {...cards};
            update[card.id] = card;
            return update;
          });
          cardRepository.saveCard(userId,card);
        }
      
      

    return (<section className={styles.maker}>
        <Header onLogout={onLogout} />
            <section className={styles.sectionBox}>
                <Editer cards={cards}
                onDelete={deleteCard}
                onAdd={createOrUpdateCard}
                onUpdate={createOrUpdateCard}
                FileInput={FileInput}
                />
                <Preview cards={cards}/>
            </section>
        <Footer/>
        </section>
    );

});

export default Maker;
