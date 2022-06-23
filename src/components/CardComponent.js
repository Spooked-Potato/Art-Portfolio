import React from "react";

export function CardComponent ({Image}){
    return(
        <>
        <div className="card"  style={{backgroundImage: `url(${Image})`}}>
                <p className="card-houver-text">
                    Click Me
                </p>
        </div>

        <div className="card-overlay-container">
                <div className="card-overlay">
                    <div className="card-overlay-image"></div>
                </div>
            </div>
        </>
    )
}