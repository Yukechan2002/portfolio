import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title main-font" data-aos="fade-in">
          Contact <span className="text-blue main-font">Me</span>
        </h2>
        <div className="card-container">
          <div className="card" data-aos="fade-in">
            <FontAwesomeIcon icon={faEnvelope} size="3x" color="#007bff" />
            <h3>Email</h3>
            <p>yukeshchandran002@gmail.com</p>
          </div>
          <div className="card" data-aos="fade-in" data-aos-delay="100">
            <FontAwesomeIcon icon={faGithub} size="3x" color="#007bff" />
            <h3>GitHub</h3>
            <a
              href="https://github.com/Yukechan2002"
              className="text-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yukesh Chandran
            </a>
          </div>
          <div className="card" data-aos="fade-in" data-aos-delay="200">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#007bff" />
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yukesh-chandran/"
              className="text-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yukesh Chandran
            </a>
          </div>
        </div>

        <form
          id="contact-form"
          data-aos="zoom-in"
          data-aos-delay="300"
          action="https://formspree.io/f/xrbzkbjd"
          method="POST"
        >
          <h2 className="main-font">
            Send <span className="text-blue main-font">Email</span>
          </h2>

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              id="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-email">
            <span className="default">Send</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Sent
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
          <div id="status"></div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
