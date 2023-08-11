import ProductFrom from './ProductForm.js';
// import './NewFrom.css';

function NewForm(props){

    function sendDateFromNewForm(data){
        console.log('I am in NewForm.js');
        props.newProductDate(data);
    }

    return(
        <div>
            <ProductFrom sendDateToNewForm={sendDateFromNewForm}/>
        </div>
    )
}

export default NewForm;