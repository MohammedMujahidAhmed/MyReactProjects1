// import './ProductForm.css';

import { useState } from "react";

function ProductForm(props){

    const [newTitle , setTitle] = useState('');    
    const [newDate , setDate] = useState('');    
    
    function titleChange(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    
    function dateChange(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const ProductDate = {
            title:newTitle,
            date:newDate
        };

        console.log('I am in ProductForm.js');
        props.sendDateToNewForm(ProductDate);
        // console.log(ProductDate);

        setTitle('');
        setDate('');
        // return ProductDate;
    }
    return(

        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input  type="text" value={newTitle} onChange={titleChange}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={newDate} onChange={dateChange}></input>
            </div>
            <button type="submit">Add Product</button>
        </form>
        
    );
}

export default ProductForm;