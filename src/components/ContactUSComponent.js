import React from "react";
import '../App.css';
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

function ContactUSComponent(){
    return(
        <>
        <NavComponent/>
        <div className = "img-background-contact">    
            <div className = 'form-wrapper-contact'>
                <form className = "form-contact">
                    <span className = "title-contact"> Contact Me</span><br/>

                    <div className = "details-contact">
                        <label className = "label-contact">Name</label>
                        <input className = "input-contact" type = "text" placeholder = "Type in your name" name = "name" required/>
                    </div>

                    <div className = "details-contact">
                        <label className = "label-contact">Email</label>
                        <input className = "input-contact" type  = "email" placeholder = "Type in your email" name = "email" required/>
                    </div>

                    <div className = "details-contact"> 
                        <label className = "label-contact">What are you looking for?</label>
                        <textarea className = "textarea-contact" placeholder = "Leave here what you are looking for?"  name = "comment" required></textarea> 
                    </div>

                    <button className = "btn-show-contact" type = "button">SEND</button>
                </form>
            </div>
        </div>
        <FooterComponent/>
        </>

        )   
    }
    
    export default ContactUSComponent;