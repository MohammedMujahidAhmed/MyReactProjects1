import { useState } from "react";


function Filter({filterData,catogery,setCatogery}){

    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">

            {
                filterData.map((data) =>{
                    return <button 
                    onClick={()=>{
                        setCatogery(data.title);
                    }}
                        className={`click:border-2 text-lg px-2 py-1 rounded-md select font-medium
                         text-white bg-black hover:bg-opacity-50 border-4 ${catogery === data.title ? 
                            "border-opacity-60 border-white":
                            "border-opacity-60 border-transparent"}`
                        }
                    >{data.title}</button> 
                })
            }
                <button onClick={()=>setCatogery("Liked")} 
                className={`click:border-2 text-lg px-2 py-1 rounded-md select font-medium
                            text-white bg-black hover:bg-opacity-50 border-4 ${catogery === "Liked" ? 
                                "border-opacity-60 border-white":
                                "border-opacity-60 border-transparent"}`
                            }
                        >Liked</button>
        </div>
    );
}

export default Filter;