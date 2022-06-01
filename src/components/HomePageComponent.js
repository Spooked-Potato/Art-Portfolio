import React from "react";
import '../App.css';
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

function HomePageComponent(){
    return(
        <>
        <NavComponent />
        <section className="hero_section">
           <h1> Welcome to my <br></br>
               <span>art</span></h1>
            <button>Check-out</button>
        </section>
        
        <FooterComponent/>
        </>
    )   
}

export default HomePageComponent;