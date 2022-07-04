import React, { useState } from "react";
import "../App.css";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

export default function ContactUSComponent() {
    const [aberto, setAberto] = useState(false);

    return (
        <>
            <NavComponent />
            <section className="form_section">
                <div className="form_section_container">
                    <div className="form_section_container_dividor">
                        <div className="about_me_information">
                            <h2>Need Help?</h2>
                            <a
                                href="https://www.google.com/maps/place/Portim%C3%A3o/@37.1801418,-8.6053192,12z/data=!3m1!4b1!4m5!3m4!1s0xd1b28eca9242961:0x93fcc923718014e1!8m2!3d37.1361666!4d-8.5377073"
                                target="_blank"
                                rel="noreferrer"
                            >
                                xxxxx-xxxx-xxxx
                                <br /> xxxxx-xxx-xxx <br />
                                0000-000 Portimão
                            </a>
                            <h2>GENERAL INFORMATION </h2>
                            <a
                                href="tel:999999999"
                                target="_blank"
                                rel="noreferrer"
                            >
                                TEL: (+351) 999 999 999 <br />
                            </a>
                            <a
                                href="mailto:xx@xx.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Email: xx@xxx.com
                            </a>
                        </div>
                    </div>
                    <div className="form_section_container_dividor">
                        <form>
                            <div className="details_contact">
                                <label className="label_contact">Name</label>
                                <input
                                    className="input_contact"
                                    type="text"
                                    placeholder="Type in your name"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className="details_contact">
                                <label className="label_contact">Email</label>
                                <input
                                    className="input_contact"
                                    type="email"
                                    placeholder="Type in your email"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="details_contact">
                                <label className="label_contact">
                                    What are you looking for?
                                </label>
                                <textarea
                                    className="textarea_contact"
                                    placeholder="Leave here what you are looking for?"
                                    name="comment"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={() => setAberto(true)}
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <FooterComponent />
            {aberto ? (
                <div className="contact_alert" id="contact_alert">
                    <div className="contact_box_alert">
                        <h2>Your message was sent successfully</h2>
                        <button onClick={() => setAberto(false)}>OK</button>
                    </div>
                </div>
            ) : null}
        </>
    );
}
