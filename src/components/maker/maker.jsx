import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editer from '../editer/editer';
import Preview from '../preview/preview';

const Maker = ({authService}) => {

    const [cards,setCards] = useState([
        {
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
        {
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
        {
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
      ]);

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


    return (<section className={styles.maker}>
        <Header onLogout={onLogout} />
            <section className={styles.sectionBox}>
                <Editer cards={cards}/>
                <Preview cards={cards}/>
            </section>
        <Footer/>
        </section>
    );

};

export default Maker;
