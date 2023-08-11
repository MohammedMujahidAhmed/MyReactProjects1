import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"

function Testimonial({currPos,setCurPos,length,setTestimonial,testimonial}){

    function leftSliderHandler(){
        let id = currPos;
        if(id === 0){
            id = length-1;
        }
        else{
            id = id-1;
        }
        setCurPos(id);
    }

    function rightSliderHandler(){
        let id = currPos;
        id = (id+1)%length;
        setCurPos(id);
    }

    function getRandom(){
        let id = (Math.floor(Math.random() * length));
        setCurPos(id);
        console.log(id);
    }

    return(
        <div className=" flex flex-col items-center relative gap-4 p-8 shadow-md hover:shadow-2xl bg-white">
            <div className="">
                <img className="absolute -top-10 left-4 rounded-full z-10" src={testimonial.image}
                    width="90px"
                ></img>
                <div className="w-[92px] h-[92px] rounded-full absolute -top-11 left-5 bg-violet-600"></div>
            </div>
            <div className="flex flex-col items-center">
                <div className="font-bold text-xl">{testimonial.name}</div>
                <div className="text-sm font-semibold text-slate-400">{testimonial.job}</div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div>
                    <FaQuoteLeft className="text-violet-600"/>
                </div>
                <div>
                    <p className="text-center text-sm text-slate-900">{testimonial.text}</p>
                </div>
                <div>
                    <FaQuoteRight className="text-violet-600"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="flex felx-row gap-2">
                    <button onClick={leftSliderHandler}>
                        <AiOutlineLeft className="text-violet-400 hover:text-violet-600"/>
                    </button>
                    <button onClick={rightSliderHandler}>
                        <AiOutlineRight className="text-violet-400 hover:text-violet-600"/>
                    </button>
                </div>
                <button className="bg-violet-600 text-white p-1 rounded-md px-7 hover:opacity-90" onClick={getRandom}>Surprise Me</button>
            </div>
        </div>
    );
}

export default Testimonial;