import React from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = ({card}) => {

    const DEFAULT_URL = 'default_logo.png';

    const {id,name,company,theme,title,email,message,fileName,fileURL} = card;

    const url = fileURL || DEFAULT_URL;

    return (
        <form className={styles.editer}>
            <input className={styles.input} type="text" name="name" value={name}/>
            <input className={styles.input} type="text" name="company" value={company}/>
            <select className={styles.select} type="text" name="theme" value={theme}>
                <option value="black" >Black</option>
                <option value="light" >Light</option>
                <option value="colorful" >Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title}/>
            <input className={styles.input} type="text" name="email" value={email}/>
            <textarea className={styles.textarea} type="text" name="message" value={message}/>
            
        </form>
    );
}

export default CardEditForm;