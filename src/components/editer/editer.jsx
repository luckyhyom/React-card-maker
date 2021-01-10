import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './editer.module.css';

const Editer = ({cards}) => {
    return <section className={styles.editer}>
        <h1>Editer</h1>
        <ul>
            {cards.map(card => {
                return <CardEditForm card={card} />
            })}
        </ul>
        </section>
}

export default Editer;