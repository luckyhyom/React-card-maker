import React from 'react';
import styles from './cardEditForm.module.css';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
const CardEditForm = ({card,onDelete}) => {

    const {name,company,theme,title,email,message,fileName,fileURL} = card;

    const onSubmit = () => {};

    const onDelete2 = (event) =>{
        event.preventDefault();
            return onDelete(card);
    }

    return (
        <form className={styles.editer}>
            <input className={styles.input} type="text" name="name" defaultValue={name}/>
            <input className={styles.input} type="text" name="company" defaultValue={company}/>
            <select className={styles.select} type="text" name="theme" defaultValue={theme}>
                <option value="black" >Black</option>
                <option value="light" >Light</option>
                <option value="colorful" >Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" defaultValue={title}/>
            <input className={styles.input} type="text" name="email" defaultValue={email}/>
            <textarea className={styles.textarea} type="text" name="message" defaultValue={message}/>
            <div className={styles.ImageFileInput}>
                <ImageFileInput/>
            </div>
            <Button name="Delete" onClick={onDelete2} />
        </form>
    );
}

export default CardEditForm;