import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import perfil from "../assets/img/perfil.jpg";
import CardSwipper from "./CardSwipper";
import { Button } from "bootstrap";

export default function HomePageComponent() {
    return (
        <>
            <NavComponent />
            <div>
                <section className="hero_section">
                    <div className="overlay-hero-section">
                        <h1>
                            {" "}
                            Welcome<br></br>
                            to my art
                            <button>see more</button>
                        </h1>
                    </div>
                </section>

                <div className="card-container">
                    <CardSwipper></CardSwipper>
                </div>

                <section className="about_me_section">
                    <h2>ABOUT ME</h2>
                    <div className="about_me_container">
                        <div className="box">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                        <div className="box">
                            <img src={perfil} alt="heroimg" />
                        </div>
                    </div>
                </section>
            </div>
            <FooterComponent />
        </>
    );
}
