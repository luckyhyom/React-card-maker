import React,{useRef} from 'react';
import styles from './cardEditForm.module.css';
import Button from '../button/button';
const CardEditForm = ({FileInput,card,onDelete,onUpdate}) => {

    const {name,company,theme,title,email,message,fileName,fileURL} = card;

    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();

    const onSubmit = () => {};

    const onDelete2 = (event) =>{
        event.preventDefault();
            return onDelete(card);
    }

    const updateCard = (event) => {
        console.log('test');
        event.preventDefault();
        card.name = nameRef.current.value;
        card.company = companyRef.current.value;
        card.theme = themeRef.current.value;
        card.title = titleRef.current.value;
        card.email = emailRef.current.value;
        card.message = messageRef.current.value;
        onUpdate(card);
        // onUpdate({
        //     ...card,
        //     [event.currentTarget.name]:event.currentTarget.value,
        // });
    }

    const onFileChange = file =>{
        // onUpdate() 함수를 만들어 놓으니까 뭔가 기능을 추가할때도 간단하네
        card.fileName = file.name;
        card.fileURL = file.url;
        onUpdate(card);
    }

    return (
        <form ref={formRef} className={styles.editer} onKeyUp={updateCard}>
        {/* <form ref={formRef} className={styles.editer} onChange={updateCard}> */}
            {/* <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} onChange={updateCard}/> */}
            <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} />
            <input ref={companyRef} className={styles.input} type="text" name="company" defaultValue={company}/>
            <select ref={themeRef} className={styles.select} type="text" name="theme" defaultValue={theme}>
                <option value="black" >Black</option>
                <option value="light" >Light</option>
                <option value="colorful" >Colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" defaultValue={title}/>
            <input ref={emailRef} className={styles.input} type="text" name="email" defaultValue={email}/>
            <textarea ref={messageRef} className={styles.textarea} type="text" name="message" defaultValue={message}/>
            <div className={styles.ImageFileInput}>
                <FileInput name={fileName||'default'} onFileChange={onFileChange} url={fileURL} />
            </div>
            <Button name="Delete" onClick={onDelete2} />
        </form>
    );
}

export default CardEditForm;