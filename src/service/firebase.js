import firebase from 'firebase/app';

// 셋팅된 firebase

const firebaseConfig = {
    apiKey: `AIzaSyDpIW9Jtyh0NTirett6D-EJipRFQy0WTxE`,
    authDomain: `business-card-maker-6cf93.firebaseapp.com`,
    projectId: `usiness-card-maker-6cf93`,
    storageBucket: `business-card-maker-6cf93.appspot.com`,
    messagingSenderId: `476590891348`,
    appId: `1:476590891348:web:8f6fc108e8138d09a5e8c1`,
    measurementId: `G-L31ZYG7PF9`,
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
