import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const mouseMovementAngle = (e) => {
    const x_coord = e.clientX;
    const y_coord = e.clientY;
    const x_centre = window.screen.width / 4;
    const y_centre = (window.screen.height + 200) / 2;
    let val = 0.78;
    const ele = document.querySelector(".form-background");
    if (x_coord >= x_centre && y_coord <= y_centre) {
      val = (y_centre - y_coord) / (x_coord - x_centre);
      val = Math.atan(val);
    } else if (x_coord < x_centre && y_coord < y_centre) {
      val = (x_coord - x_centre) / (y_centre - y_coord);
      val = Math.PI / 2 - Math.atan(val);
    } else if (x_coord < x_centre && y_coord > y_centre) {
      val = (y_centre - y_coord) / (x_coord - x_centre);
      val = Math.PI + Math.atan(val);
    } else if (x_coord > x_centre && y_coord > y_centre) {
      val = (x_coord - x_centre) / (y_coord - y_centre);
      val = (3 * Math.PI) / 2 + Math.atan(val);
    }
    ele.style = `--coordinate-rotation: ${val}rad`;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const sentstatus = document.querySelector(".sent-status");
    emailjs
      .sendForm(
        "service_t7v02yo",
        "template_azekgtb",
        form.current,
        "c0XU5Lg01RfIQgEi5"
      )
      .then(
        (result) => {
          sentstatus.innerHTML = "Message Sent!";
          sentstatus.style.display = "flex";
          const arr = Array.from(form.current.children);
          arr.forEach((input) => {
            const ele = input.querySelector(".need-changes");
            if (ele) {
              ele.value = "";
            }
          });
          setTimeout(() => {
            sentstatus.style.display = "none";
          }, 2000);
          return;
        },
        (error) => {
          sentstatus.innerHTML = "Message Not Sent!";
          sentstatus.style.display = "flex";
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-container" id="contact">
      <div className="contact-form">
        <div className="form-container">
          <div className="form-background" onMouseMove={mouseMovementAngle}>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-section">
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="need-changes"
                  required
                />
              </div>
              <div className="form-section">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="need-changes"
                  required
                />
              </div>
              <div className="form-section">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Hello"
                  className="need-changes"
                />
              </div>
              <div className="form-section">
                <input className="submit-btn" type="submit" value="Submit" />
              </div>
            </form>
            <div className="sent-status"></div>
          </div>
        </div>
        <div className="form-info">
          <h1>Contact Me</h1>
          <div className="profile-section">
            <div className="profile-img"></div>
            <div className="profile-name"> Abhijeet Takle</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
