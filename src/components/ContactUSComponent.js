import React, { useState } from "react";
import "../App.css";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

export default function ContactUSComponent() {
    const [aberto, setAberto] = useState(false);

    return (
        <>
            <NavComponent />
            <section className="form-section">
                <form>
                    <span> Contact Me</span>
                    <br />

                    <div className="details-contact">
                        <label className="label-contact">Name</label>
                        <input
                            className="input-contact"
                            type="text"
                            placeholder="Type in your name"
                            name="name"
                            required
                        />
                    </div>

                    <div className="details-contact">
                        <label className="label-contact">Email</label>
                        <input
                            className="input-contact"
                            type="email"
                            placeholder="Type in your email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="details-contact">
                        <label className="label-contact">
                            What are you looking for?
                        </label>
                        <textarea
                            className="textarea-contact"
                            placeholder="Leave here what you are looking for?"
                            name="comment"
                            required
                        ></textarea>
                    </div>

                    <button type="button" onClick={() => setAberto(true)}>
                        SEND
                    </button>
                </form>
            </section>

            {aberto ? (
                <section className="contact_alert" id="contact_alert">
                    <div className="contact_box">
                        <h1 className="text-2xl">
                            Your message was sent successfully
                        </h1>
                        <p className="mb-2 mt-4">Click "here" to go back</p>
                        <button
                            className="mt-4"
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
