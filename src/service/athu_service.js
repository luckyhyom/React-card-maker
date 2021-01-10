import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {

    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout(){
        firebaseApp.auth().signOut();
    }

    onAuthChange(onUserChanged){
    firebase.auth().onAuthStateChanged(user => {
        onUserChanged(user);
        // user && onUserChanged(user.uid)
      });
    }
}

export default AuthService;