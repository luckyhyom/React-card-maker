import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {

const DEFAULT_URL = 'default_logo.png';

const {id,name,company,theme,title,email,message,fileName,fileURL} = card;

const url = fileURL || DEFAULT_URL;


return (
    <div className={`${styles.cardBody} ${themes(theme)}`}>
        <div>{card.name}</div>
        <section className={styles.photo}>
            <img src={`./images/${url}`} alt=""/>
        </section>
        <section className={`${styles.info} `}>
            <input type="hidden" value={id}/>
            <div  className={styles.name}>{name}</div>
            <div  className={styles.company}>{company}</div>
            <div className={styles.underline}></div>
            <div  className={styles.company}>{title}</div>
            <div  className={styles.email}>{email}</div>
            <div  className={styles.aboutme}>{message}</div>
        </section>
    </div>
)

function themes(theme) {
    switch (theme) {
        case 'black':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown styles : ${theme}`);
    }
}

}

export default Card;