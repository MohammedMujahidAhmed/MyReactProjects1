import Card from "./Card";
import { useState } from "react";

function Cards({courses,catogery}){

    const [likedCardIds,setLikedCardIds] = useState([]);
    function inLikedCourses(e){
        let flage = false;
        for (let index = 0; index < likedCardIds.length; index++) {
            if(e.id === likedCardIds[index]){
                flage = true;
                break;
            }
        }
        return flage === true ? true : false;
    }

    let allCourses = [];
    const getCourses = ()=>{
        if(catogery === "All"){
            Object.values(courses).forEach((courseCat)=>{
                courseCat.forEach((e)=>{
                    allCourses.push(e);
                })
            })
            return allCourses;
        }
        else if(catogery === "Liked"){
            Object.values(courses).forEach((courseCat)=>{
                courseCat.forEach((e)=>{
                    if(inLikedCourses(e)){
                        allCourses.push(e);
                    }
                })
            })
            return allCourses;
        }
        else{
            return courses[catogery];
        }
    }

    return(
        <div className="w-11/12 max-w-[1200px] flex flex-wrap m-auto justify-center gap-4 pb-8">
            {
                (likedCardIds.length === 0 && catogery === "Liked")?
                    (<div className="flex justify-center items-center h-[200px] m-auto text-white font-bold text-[24px] ">No Cards Liked</div>)
                :(
                    getCourses().map((course)=>{
                        return <Card course={course} likedCardIds={likedCardIds} setLikedCardIds={setLikedCardIds}></Card>
                    })
                )
            }
        </div>
    );
}

export default Cards;