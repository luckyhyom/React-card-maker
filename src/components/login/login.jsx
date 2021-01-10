import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../login/login.module.css';

const Login = ({authService}) => {

    let history = useHistory();

    const goToMaker = userId =>{
        history.push({
            pathname: '/maker',
            state: {id:userId}
        })
    }

    const onLogin = (event) =>{
        authService.login(event.currentTarget.textContent)
            .then( data => goToMaker(data.user.uid)
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