import React, { useState } from "react";
import { data } from "./DataCard";
import NavComponent from "./NavComponent";
import { CardComponent } from "./CardComponent";
import FooterComponent from "./FooterComponent";

export function CardGrid () {
    return (
        <>
        <NavComponent/>
        <div className="card-container">
          {data.map((element)=> (
            <CardComponent key={element.id} Image={element.image}/>
          ))}
        </div>    
          
        <FooterComponent/>
        </>
    )
}