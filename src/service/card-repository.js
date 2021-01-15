import {firebaseDatabase} from './firebase';

class CardRepository {
    saveCard(userId,card){
        firebaseDatabase //
        .ref(`${userId}/cards/${card.id}`)
        .set(card); //card는 객체 {id:20210114,name:hyomin,url:https://cloudinary,}
    }

    deleteCard(userId,card){
        firebaseDatabase //
        .ref(`${userId}/cards/${card.id}`)
        .remove(); //card는 객체 {id:20210114,name:hyomin,url:https://cloudinary,}
    }

    syncCard(userId,onUpdate){
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', (snapshot) =>{
        const data = snapshot.val();
        onUpdate(data);
        });

        return () => ref.off();
    }
}

export default CardRepository;