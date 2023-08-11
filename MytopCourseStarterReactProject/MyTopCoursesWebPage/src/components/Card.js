import React, { useState } from "react";
import { FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

function Card({course,likedCardIds,setLikedCardIds}){

    function changeHandler(id){
        if(likedCardIds.includes(id)){
            setLikedCardIds((prev) => prev.filter((cid) => (cid !== id)));
            toast.warning("like removed");
        }
        else{
            if(likedCardIds.length === 0){
                setLikedCardIds([id]);
            }
            else{
                setLikedCardIds((prev)=>[...prev,id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className="max-w-[380px] bg-slate-700 rounded-lg text-white">
            <div className="relative">
                <img className="rounded-t-lg" src = {course.image.url}
                    width = "380px"
                ></img>
                <div className="absolute -bottom-4 right-3 bg-white rounded-full p-1 w-[35px] h-[37px]">
                    <button onClick={()=>changeHandler(course.id)}>
                            {
                                likedCardIds.includes(course.id) ? 
                                (<FcLike fontSize="1.75rem"/>):
                                (<FcLikePlaceholder fontSize="1.75rem"/>)
                            }
                    </button>
                </div>
            </div> 
            
            <div className="px-4 pb-4">
                <h3 className="font-extrabold p-2 text-[24px]">
                    {course.title}
                </h3>
                <div className="font-semibold">
                    {
                        (course.description.length > 100) ?
                            `${course.description.substring(0,100)}...`
                        :
                            `${course.description}`
                    }
                </div>
            </div>
            
        </div> 
    );
}

export default Card;