import React from 'react';
import Card from './Card';

const ItemName = (props) => {
    const name = props.title;
    return(
        <Card className="itemName">
            {name}
        </Card>
    );
}

export default ItemName;