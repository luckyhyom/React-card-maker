import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// 셋팅된 firebase

const firebaseConfig = {
    apiKey: `AIzaSyDpIW9Jtyh0NTirett6D-EJipRFQy0WTxE`,
    authDomain: `business-card-maker-6cf93.firebaseapp.com`,
    projectId: `usiness-card-maker-6cf93`,
    storageBucket: `business-card-maker-6cf93.appspot.com`,
    messagingSenderId: `476590891348`,
    appId: `1:476590891348:web:8f6fc108e8138d09a5e8c1`,
    measurementId: `G-L31ZYG7PF9`,
    databaseURL: "https://business-card-maker-6cf93-default-rtdb.firebaseio.com",
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firebaseDatabase = firebaseApp.database();
  export const firebaseAuth = firebaseApp.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();

  // 회원가입은 어떻게 되는 걸까? 일단 firebaseApp은 내 apiKey로 실행이 된다.
  // firebase설정에서 나의 google,github계정을 적어넣는데.. 이것만 가능하다는건지
  // 아니면 이게 관리자 아이디라는건지 모르겠다.
  // 등록하지 않은 계정도 가입이 되는건 뭘까?
