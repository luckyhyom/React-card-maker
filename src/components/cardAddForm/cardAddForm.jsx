import React,{useRef} from 'react';
import styles from './cardAddForm.module.css';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
const CardAddForm = ({onAdd}) => {

const nameRef = useRef();
const companyRef = useRef();
const themeRef = useRef();
const titleRef = useRef();
const emailRef = useRef();
const messageRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        const card = {
            id: Date.now(),
            name: nameRef.current.value||'',
            company: companyRef.current.value||'',
            theme: themeRef.current.value||'',
            title: titleRef.current.value||'',
            email: emailRef.current.value||'',
            message: messageRef.current.value||'',
            fileName: '',
            fileURL: null
        }

        // 함수라 생각하지 말고 그냥 데이터 전달해주는 바구니라 생각해라..
        // 스테이트를 가진 부모가, 자식에게 심부름을 시키면서 바구니를 줌
        // 자식은 바구니에 부모가 부탁한 물건을 담기만 하면 됨
        console.log(card);
        onAdd(card);
    };


    return (
        <form className={styles.editer}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder={"name"}/>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder={"company"}/>
            <select ref={themeRef} className={styles.select} type="text" name="theme" placeholder={"theme"}>
                <option value="black" >Black</option>
                <option value="light" >Light</option>
                <option value="colorful" >Colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder={"title"}/>
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder={"email"}/>
            <textarea ref={messageRef} className={styles.textarea} type="text" name="message" placeholder={"message"}/>
            <div className={styles.ImageFileInput}>
                <ImageFileInput/>
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    );
}

export default CardAddForm;