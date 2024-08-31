import React from 'react'
import "./Education.css"
import bit from "../../assets/images/bit.png";

const Education = () => {
  return (
    <section id="education" class="education">
    <div class="container">
      <h2 class="main-font" data-aos="fade-in">My <span class="text-blue main-font">Education</span></h2>

      <div class="education-card" data-aos="zoom-in">
        <div class="education-card-column">
          <div class="card-column-image">
            <img src={bit} alt=""/>
          </div>

          <div class="card-column-large">
            <h4 class="education-year">2024</h4>
            <h4>Bannari Amman Institute of Technology - Bachelor of Electronics and Communication</h4>
            <p>GPA 8.74/10</p>
            <ul>
              <li>Major in Electronics and Communication</li>
              <li>Minor in Embedded Systems</li>
              <li>Minor in Full stack development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education