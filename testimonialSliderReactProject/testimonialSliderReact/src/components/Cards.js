import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

function Cards({testimonials}){

    const [currPos,setCurPos] = useState(0);
    const [testimonial,setTestimonial] = useState(testimonials[currPos]);

    useEffect(
        ()=>{
            setTestimonial(testimonials[currPos]);
        }
    ,[currPos]);

    let length = testimonials.length;

    return(
        <Testimonial currPos={currPos} setCurPos={setCurPos} length={length} setTestimonial={setTestimonial} testimonial={testimonial}></Testimonial>
    );
}

export default Cards;