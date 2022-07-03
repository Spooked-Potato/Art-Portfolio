import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import perfil from "../assets/img/perfil.jpg";
import CardSwipper from "./CardSwipper";
import person from "../assets/img/person.svg";
import brush from "../assets/img/brush.svg";
import phone from "../assets/img/phone.svg";

export default function HomePageComponent() {
    return (
        <>
            <NavComponent />
            <div>
                <section className="hero_section">
                    <div className="overlay_hero_section">
                        <h1>
                            Welcome<br></br>
                            to my art
                            <button>see more</button>
                        </h1>
                    </div>
                </section>
                <section className="homepage_swiper_card">
                    <h2>Some examples</h2>
                    <div className="homepage_card_container">
                        <CardSwipper></CardSwipper>
                    </div>
                </section>

                <section className="homepage_about_me_section">
                    <h2>ABOUT ME</h2>
                    <div className="homepage_about_me_container">
                        <div className="box" id="homepage_text_about_me">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book.
                            </p>

                            <button>Read more</button>
                        </div>
                        <div className="box">
                            <img src={perfil} alt="heroimg" />
                        </div>
                    </div>
                </section>

                <section className="icon_container">
                    <div className="icons">
                        <img src={person} alt="heroimg" />
                        <p>test</p>
                    </div>

                    <div className="icons">
                        <img src={brush} alt="heroimg" />
                        <p>test</p>
                    </div>

                    <div className="icons">
                        <img src={phone} alt="heroimg" />
                        <p>test</p>
                    </div>
                </section>
            </div>
            <FooterComponent />
        </>
    );
}
