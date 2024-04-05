import React from "react";
import "./Contact.css";

function Contact() {
  return (
      <div className="contact-page">
          <div className="contact-div">

            <div className="contact-div__form">
               <form >
                <label >
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Samyak Agarwal"' name="full_name"></input>

                <label >
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" name="email" ></input>

                <label >
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." name="message"></textarea>

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
    
  );
}

export default Contact;
