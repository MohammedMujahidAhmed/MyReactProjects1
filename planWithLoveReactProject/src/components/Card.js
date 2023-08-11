import { useState } from "react";


function Card({id,name,info,image,price,removeTour}){

    const [readMore,setReadMore] = useState(false);

    return(
        <div className="card-container">
            <div className="card-outer-desc">
                <img className="card-img" src={image}></img>
                <div className="card-innner-desc">
                    <div className="card-price">
                    &#8377;{price}
                    </div>
                    <div className="card-name">
                        {name}
                    </div>
                    <div className="card-info">
                        {readMore ? info:`${info.substring(0,200)}....`}
                        <span  className="card-readmore" onClick={()=>{setReadMore(!readMore)}}>{readMore ? ' Show less' : ' Read more'}</span>
                    </div>
                </div>
            </div>
            <button className="card-btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    );
}

export default Card;