import './ItemDate.css';

function ItemDate(probs){

    const date = probs.date;
    const month = probs.month;
    const year = probs.year;

    return (
        <div className="data">
            <span> {date} </span>
            <span> {month} </span>
            <span> {year} </span>
        </div>
    );
}

export default ItemDate;