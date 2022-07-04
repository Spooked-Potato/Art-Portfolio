import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/nav.png";
import OpenMenu from "../assets/img/hamburger.svg";
import closeMenu from "../assets/img/close.svg";

export default function NavComponent() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* <nav style={menuOpen ? { minHeight: "13vh" } : { height: "13vh" }}>
                <div className="logo">
                    <img
                        src={logo}
                        alt="logo"
                        style={
                            menuOpen
                                ? { display: "none" }
                                : { display: "block" }
                        }
                    />
                </div>

                <div
                    className="nav-links"
                    style={menuOpen ? { display: "flex" } : { display: "none" }}
                >
                    <ul
                        style={
                            menuOpen
                                ? { flexDirection: "column", display: "flex" }
                                : { flexDirection: "row", display: "none" }
                        }
                    >
                        <li
                            className="logo"
                            style={
                                menuOpen === false
                                    ? { display: "none" }
                                    : { display: "block" }
                            }
                        >
                            <img src={logo} alt="logo" />
                        </li>
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
                </div>

                <div
                    className="nav-mobile-toggle"
                    style={
                        menuOpen
                            ? { top: "20px" }
                            : { top: "50%", transform: "translate(0, -50%)" }
                    }
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img src={menuOpen ? closeMenu : OpenMenu} alt="nav menu" />
                </div>
            </nav> */}

            <nav>
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
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
            </nav>
        </>
    );
}
