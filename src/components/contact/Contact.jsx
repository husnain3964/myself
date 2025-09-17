import React from "react";
import "./contact.css";
import theme from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
// import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
function Contact() {
 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccd535a3-7b09-4ab2-9aab-8118274cdeff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };

  return (
    <div id="contact"  className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. you
            can contact me anytime
          </p>
          <div className="contact-details">
            <div className="cotact-details">
              <img src={mailIcon} alt="" />
              <p>husnain3964@gmail.com</p>
            </div>
            <div className="cotact-details">
              <img src={callIcon} alt="" />
              <p>0324-2356252</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text"  name="name" placeholder="Put your name" />
          <label htmlFor="">your email</label>
          <input type="email"  name="email" placeholder="Put your email" />
          <label htmlFor="">writ your message</label>
          <textarea type="text" name="message"  rows='8' placeholder="write your message" />
          <button     type="submit" className="contact-submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
