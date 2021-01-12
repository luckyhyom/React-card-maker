import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm/cardAddForm';
import styles from './editer.module.css';

const Editer = ({cards,onDelete,onAdd,onUpdate}) => {
    return (<section className={styles.editer}>
        <h1>Editer</h1>
        {/* <ul className={styles.editerList}> */}
        {/* {cards.map(card => {
                return  (
                <CardEditForm card={card} onDelete={onDelete} key={card.id} onUpdate={onUpdate} />
            );
            })} */}
            {Object.keys(cards).map(key => {
                return  (
                <CardEditForm card={cards[key]} onDelete={onDelete} key={key} onUpdate={onUpdate} />
            );
            })}
        {/* </ul> */}
        <CardAddForm onAdd={onAdd}/>
        </section>
        )
}

export default Editer;