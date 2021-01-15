import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../login/login.module.css';

const Login = ({authService}) => {

    let history = useHistory();

    const goToMaker = userId =>{

        console.log(`goTomaker : ${userId}`);

        history.push({
            pathname: '/maker',
            // {}하나가 객체하나 .()으로 구별됨
            state: {id:userId}
        })
    }

    const onLogin = (event) =>{
        authService.login(event.currentTarget.textContent)
            .then( data => {
                console.log(`onLogin to goToMaker : ${data.user.uid}}`);
                goToMaker(data.user.uid||data.user.id);
            }
        )
    }

        // firebase.auth().onAuthStateChanged(user => {
        //     console.log(user);
        //     user && goToMaker(user.uid);
        //   });
    useEffect(()=>{
        authService.onAuthChange(user=>{
            console.log(user);
            user && goToMaker(user.id);
        });
    });
    

    return (
        <section className={styles.loginForm}>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul>
                        <li>
                            <button onClick={onLogin} className={styles.loginBtn}>
                                Google
                            </button>
                        </li>
                        <li>
                            <button onClick={onLogin} className={styles.loginBtn}>
                                Github
                            </button>
                        </li>
                    </ul>
                </section>
            <Footer/>
        </section>
    );
};

export default Login;