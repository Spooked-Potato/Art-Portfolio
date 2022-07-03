import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/nav.png";
export default function FooterComponent() {
    return (
        <footer>
            <img src={logo} alt="logo" />

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
            </ul>
            <p>All rights reserved @2022</p>
        </footer>
    );
}
