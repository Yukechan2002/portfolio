import logo from "../../assets/images/Y.png";
import x from "../../assets/icons/x-icon.svg";
import hamburger from "../../assets/icons/hamburger-icon.svg";

import resume from "../../../src/assets/Yukesh CV.pdf";
import "./Hero.css";
import { useEffect, useState, useRef } from "react";

function Hero() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        let newScrollPosition = window.scrollY;

        if (newScrollPosition > previousScrollPosition) {
          headerRef.current.classList.add("inactive-scrolling");
          headerRef.current.classList.remove("active");
        } else if (newScrollPosition < previousScrollPosition) {
          headerRef.current.classList.remove("inactive-scrolling");
          headerRef.current.classList.add("active");
        }

        previousScrollPosition = newScrollPosition;
      } else {
        headerRef.current.classList.remove("inactive-scrolling");
        headerRef.current.classList.remove("active");
      }
    });
  }, []);

  return (
    <section className="hero">
      <header ref={headerRef}>
        <a href="/" className="logo">
          <img src={logo} alt="website logo" />
        </a>

        <nav className={navIsOpened ? "opened" : ""}>
          <button onClick={() => setNavIsOpened(false)}>
            <img src={x} alt="close mobile menu" />
          </button>
          <ul>
            <li>
              <a onClick={() => setNavIsOpened(false)} href="#projects">
                Projects
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a onClick={() => setNavIsOpened(false)} href="#stack">
                Tech Stack
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a onClick={() => setNavIsOpened(false)} href="#about">
                Education
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a onClick={() => setNavIsOpened(false)} href="#contact">
                Contact Me
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                onClick={() => setNavIsOpened(false)}
                href="https://github.com/Yukechan2002"
                target="_blank"
              >
                My Github
              </a>
            </li>
          </ul>
        </nav>

        <button onClick={() => setNavIsOpened(true)} className="menu-icons">
          <img src={hamburger} alt="open mobile menu" />
        </button>
      </header>

      <div className="hero-inner">
        <div className="hero-heading">
          <h1>Hi, I'm Yukesh Chandran</h1>
        </div>

        <h1 className="hero-intro">
          I dedicate my day to developing and managing projects with expertise
          in JavaScript, React.js, Node.js, and MongoDB.
        </h1>

        <div className="hero-ctas">
          <a href="#projects">
            <button>My Projects</button>
          </a>

          <a href={resume} target="_blank">
            <button>Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
