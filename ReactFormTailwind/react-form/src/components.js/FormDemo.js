import { useState } from "react";
import "./FormDemo.css"
import InputText from "./InputText";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import RadioInput from "./RadioInput";

function FormDemo(){
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"",
        streetAddress:"",
        city:"",
        state:"",
        pinCode:"",
        comments:false,
        candidates:false,
        offers:false,
        pushNotification:""
    });

    function changeHandler(event){
        const {name,type,value,checked} = event.target;
        setFormData(
            preFormData=>{
                return{
                    ...preFormData,
                    // [event.target.name]:event.target.value
                    [name]: type === "checkbox" ? checked : value
                };
                
            }
        );
    }

    function saveForm(event){
        event.preventDefault()
        console.log(formData)
    }

    // console.log(formData)

    return( 
        <div className="max-w-[1100px] m-auto p-3 border my-3 rounded-md">
            <form onSubmit={saveForm}>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"First Name"} name={"firstName"} type={"text"}/>
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"Last Name"} name={"lastName"} type={"text"}/>
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"Email Address"} name={"email"} type={"email"}/>
                <br/>

                <label htmlFor="country" className="font-bold">Country</label>
                <select
                    name = "country"
                    value={formData.country}
                    onChange={changeHandler}
                    placeholder="Enter"
                    id="country"
                    className="border rounded-md p-1 w-full hover:border-blue-800"
                    required
                >
                    <option value="---">---</option>
                    <option value="India">India</option>
                    <option value="Austrialia">Austrialia</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="Afganisthan">Afganisthan</option>
                    <option value="Saudi">Saudi</option>
                    <option value="Other">Other</option>
                </select>
                <br/>
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"Street Address"} name={"streetAddress"} type={"text"}/>
                {/* <TextArea changeHandler={changeHandler} formData={formData} labelHead={"Street Address"} name={"streetAddress"}/> */}
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"City"} name={"city"} type={"text"}/>
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"State / Province"} name={"state"} type={"text"}/>
                <br/>

                <InputText changeHandler={changeHandler} formData={formData} labelHead={"ZIP/ PinCode"} name={"pinCode"} type={"text"}/>
                <br/>

                <fieldset>
                    <legend className="font-bold">By Email</legend>
                    <CheckBox changeHandler={changeHandler} formData={formData} labelHead={"Comments"} name={"comments"} msg="get notified when someone post a comment on the post"/>
                    <CheckBox changeHandler={changeHandler} formData={formData} labelHead={"Candidates"} name={"candidates"} msg="get notigied when a candidate notifies for a job"/>
                    <CheckBox changeHandler={changeHandler} formData={formData} labelHead={"Offers"} name={"offers"} msg="get notified when a candidate accepts or rejects an offer"/>
                </fieldset>

                <br/>
                <fieldset>
                    <legend className="font-bold">Push Notification</legend>
                    <p  className="text-slate-400 mx-1">These are delevered via SMS to your mobile phone</p>
                    <RadioInput changeHandler={changeHandler} labelHead={"Everything"} name={"pushNotification"} value="Everything" id="Everything"/>
                    <RadioInput changeHandler={changeHandler} labelHead={"Same as email"} name={"pushNotification"} value="same as email" id="same-as-email"/>
                    <RadioInput changeHandler={changeHandler} labelHead={"No push notification"} name={"pushNotification"} value="No push notification" id="No-push-notification"/>
                </fieldset>

                <button className="border bg-blue-700 p-1 px-3 my-2 text-white rounded-lg">Save</button>
            </form>
        </div>  
    );
}

export default FormDemo;