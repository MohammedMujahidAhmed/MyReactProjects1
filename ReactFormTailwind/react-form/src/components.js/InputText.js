
function InputText({changeHandler,formData,labelHead,name,type}){

    // function handle(event){
    //     changeHandler(event)
    // }
    return (
        <div>
            <label htmlFor={name} className="font-bold">{labelHead}</label>
            <br/>
            <input
                type={type}
                name = {name}
                value={formData.name}
                onChange={changeHandler}
                placeholder="Enter"
                id={name}
                required
                className="w-full border rounded-md p-2 appearance-none hover:border-blue-800 focus-within:border-blue-700"
            />
        </div>
        
    );
}

export default InputText;