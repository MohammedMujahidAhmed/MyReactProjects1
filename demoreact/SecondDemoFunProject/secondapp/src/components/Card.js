import React from 'react';
import './Card.css';
const Card = (probs) => {
    const classname = 'card-'+probs.className;
    return (
        <div className={classname}>{probs.children}</div>
    );
}

export default Card;