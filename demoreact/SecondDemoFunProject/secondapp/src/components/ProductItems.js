import React from 'react';
import ItemDate from "./ItemDate";
import ItemName from './ItemName';
import Card from './Card';
import { useState } from 'react';

const ProductItems = (props) =>{

    const [ title , setTitle ] = useState(props.title);

    let changeTitle = ()=>{
        console.log("Button clicked");
        setTitle("popcorn"); 
    }
    return(
        <Card className="productItems">
            <ItemDate className="itemDate"
                date={props.date}
            ></ItemDate>
            <ItemName className="itemName"
                title={title}
            >
            </ItemName>
            <button onClick={changeTitle}>add to save</button>
        </Card>
    );
}

export default ProductItems;