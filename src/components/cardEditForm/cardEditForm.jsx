import React from 'react';

const CardEditForm = ({card}) => {

    const DEFAULT_URL = 'default_logo.png';

    const {id,name,company,theme,title,email,message,fileName,fileURL} = card;

    const url = fileURL || DEFAULT_URL;

    return (
        <form>
            <input type="text" name="name" value={name}/>
            <input type="text" name="company" value={company}/>
            <select type="text" name="theme" value={theme}>
                <option value="black" >Black</option>
                <option value="light" >Light</option>
                <option value="colorful" >Colorful</option>
            </select>
            <input type="text" name="title" value={title}/>
            <input type="text" name="email" value={email}/>
            <input type="text" name="message" value={message}/>
            <input type="text" name="namfileNamee" value={fileName}/>
            <input type="text" name="fileURL" value={fileURL}/>
        </form>
    );
}

export default CardEditForm;