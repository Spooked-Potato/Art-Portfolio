import React from "react";
import '../App.css';
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import  heroimage from "../Assets/img/heroimage.jpg";

function HomePageComponent(){
    return(
        <>
        <NavComponent />
        <section className="hero_section">
           <h1> Welcome to my <br></br>
               <span>art</span></h1>
            <button>Check-out</button>
        </section>

       
        <section className="about_me">
            <div className="about_me_container">
                <div className="box">
                    <p><span>ABOUT ME</span><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="box">
                    <img src={heroimage}  alt= "heroimg"/>
                </div>
            </div>
        </section>
        
        <FooterComponent/>
        </>
    )   
}

export default HomePageComponent;