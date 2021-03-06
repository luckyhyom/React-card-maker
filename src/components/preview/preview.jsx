import React from 'react';
import Card from '../cards/card';
import styles from './preview.module.css';
const Preview = ({cards}) => {
    return (
    <section className={styles.preview}>
        <h1>Preview</h1>
        <ul className={styles.cardList}>
        {/* {cards.map(card => (
                <li key={card.id}><Card card={card}/></li>
            ))} */}
        {Object.keys(cards).map(key => (
                <li key={key}><Card card={cards[key]}/></li>
            ))}
        </ul>
    </section>
    );
}

export default Preview;