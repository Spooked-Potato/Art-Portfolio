import React from "react";
import "../App.css";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

function ContactUSComponent() {
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
            <label className="label-contact">What are you looking for?</label>
            <textarea
              className="textarea-contact"
              placeholder="Leave here what you are looking for?"
              name="comment"
              required
            ></textarea>
          </div>

          <button type="button">SEND</button>
        </form>
      </section>    
    </>
  );
}

export default ContactUSComponent;
