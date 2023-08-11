function CheckBox({changeHandler,formData,labelHead,name,msg}){
    return(
        <div className="flex flex-row items-start p-1">
                <input
                        type="checkbox"
                        name={name}
                        id={name}
                        checked = {formData.name}
                        onChange={changeHandler}
                        className="mt-1"
                    >
                </input>
                <div className="mx-1">
                    <label htmlFor={name} className="font-bold">{labelHead}</label>
                    <p className="text-slate-400">{msg}</p>
                </div>
        </div>
    );
}

export default CheckBox;