import React,{useRef, useState} from 'react';
import styles from './imageFileInput.module.css';
const ImageFileInput = ({imageUploader,name,onFileChange,url}) => {

    const inputRef = useRef();
    // 로딩스피너를 위해서 boolean값을 활용한다.
    const [loading,setLoading] = useState(false);
    // const [file,setFile] = useState(false);

    const onButtonClick = event => {
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async event => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }

    return (
     <div className={styles.container}>
         <input className={styles.input} ref={inputRef} type="file" onChange={onChange}  />
        {
            !loading&&<button className={`${styles.button} ${url ? styles.full : styles}`} onClick={onButtonClick} >{name||'No File'}</button>
        }
        {
            loading&&<div className={styles.loading}></div>
        }
     </div>
    )
}

export default ImageFileInput;