import React, {useEffect, useState} from "react";

export function CardComponent ({Image}){
    const [isEnlarged, setIsEnlarged] = useState(false)
    useEffect(()=>{
        if(isEnlarged){

            document.body.classList.add('noScroll');
        }

        else{
            document.body.classList.remove('noScroll');
        }

        
    },[isEnlarged])
    return(
        <>
        <div className="card"  style={{backgroundImage: `url(${Image})`}} onClick={()=> setIsEnlarged(true)}>
            <p className="card-houver-text">
                Click Me
            </p>
        </div>

        {isEnlarged &&
        
        <div className="card-overlay-container" onClick={()=> setIsEnlarged(false)}>
                <div className="card-overlay" >
                    <div className="card-overlay-image" style={{backgroundImage: `url(${Image})`}}></div>
                </div>
            </div>
        }
        </> 
    )
}   