
function TextArea({changeHandler,formData,labelHead,name}){

    return (
        <div>
            <label htmlFor={name}>{labelHead}</label>
            <textarea
                name = {name}
                value={formData.name}
                onChange={changeHandler}
                id={name}
                placeholder="Enter"
                className="border border-black"
            />
        </div>
        
    );
}

export default TextArea;