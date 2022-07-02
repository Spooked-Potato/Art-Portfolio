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
                            <h2>test</h2>
                            <p>test</p>
                            <h2>test</h2>
                            <p>test</p>
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

            {aberto ? (
                <section className="contact_alert" id="contact_alert">
                    <div className="contact_box">
                        <h1 className="text_2xl">
                            Your message was sent successfully
                        </h1>
                        <p className="mb_2 mt_4">Click "here" to go back</p>
                        <button
                            className="mt_4"
                            onClick={() => setAberto(false)}
                        >
                            Here
                        </button>
                    </div>
                </section>
            ) : null}
            <FooterComponent />
        </>
    );
}
