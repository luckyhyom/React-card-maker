import React from 'react';
import Card from '../cards/card';
import styles from './preview.module.css';
const Preview = ({cards}) => {
    return (
    <section className={styles.preview}>
        <h1>Preview</h1>
        <ul className={styles.cardList}>
        {cards.map(card => (
                 <Card card={card}/>
            ))}
        </ul>
    </section>
    );
}

export default Preview;