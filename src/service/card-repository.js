import firebaseApp from './firebase';

class CardRepository {
    addCard(userId,card){
        firebaseApp.database() //
        .ref(`${userId}/cards/${card.id}`)
        .set(card); //card는 객체 {id:20210114,name:hyomin,url:https://cloudinary,}
    }

    deleteCard(userId,card){
        firebaseApp.database() //
        .ref(`${userId}/cards/${card.id}`)
        .remove(); //card는 객체 {id:20210114,name:hyomin,url:https://cloudinary,}
    }
}

export default CardRepository;