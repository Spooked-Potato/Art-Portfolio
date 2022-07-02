import React from "react";
import "../App.css";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import perfil from "../assets/img/perfil.jpg";

export default function AboutMeComponent() {
    return (
        <>
            <NavComponent />

            <section className="about_me_section">
                <h2>ABOUT ME</h2>
                <div className="about_me_container">
                    <div id="first_box">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <div className="about_me_buttons">
                            <button>My Art</button>
                            <button>Contact-Me</button>
                        </div>
                    </div>
                    <div id="second_box">
                        <img src={perfil} alt="heroimg" />
                    </div>
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
