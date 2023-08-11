import React from 'react';
import Card from './Card';
const ItemDate = (props) => {
    // const month  = props.date.toLocalString('en-US',{month:'long'});
    // const day = props.date.toLocalString('en-US',{day:'2-digit'});
    const month = props.date.month;
    const day = props.date.day;
    const year = props.date.year;
    return (
        <Card className = "itemDate">
            <div className="product-date_month">{month}</div>
            <div className="product-date_year">{year}</div>
            <div className="product-date_day">{day}</div>
        </Card>
    );
}

export default ItemDate;