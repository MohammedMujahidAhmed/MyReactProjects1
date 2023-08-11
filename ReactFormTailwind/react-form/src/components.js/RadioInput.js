
function RadioInput({changeHandler,labelHead,name,value,id}){

    return (
        <div className="p-1">
            <input
                type="radio"
                name = {name}
                value={value}
                onChange={changeHandler}
                placeholder="Enter"
                id={id}
                className="border border-black mt-1"
            />
            <label htmlFor={id} className="mx-1 font-bold">{labelHead}</label>
        </div>
        
    );
}

export default RadioInput;