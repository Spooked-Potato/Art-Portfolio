import React from "react";
import { Link } from "react-router-dom";
export default function FooterComponent(){
    return(
        <footer>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/myart"> My Art</Link> 
                </li>
                   
                <li>
                    <Link to="/aboutme">About-me</Link>  
                </li>
                
                <li>
                    <Link to="/contact">Contact-me</Link>
                </li>
                
                 <p>All rights reserved @2022</p>
            </ul>
       
        </footer>
    )
}






