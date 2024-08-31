import { useState } from "react"
import css from "../../assets/icons/css3-original.svg"
import html from "../../assets/icons/html5-original.svg"
import js from "../../assets/icons/javascript-original.svg"
import react from "../../assets/icons/react-original.svg"
import SingleStack from "../SingleStack/SingleStack"
import node from "../../assets/icons/nodejs-icon.svg";
import express from "../../assets/icons/expressjs-icon.svg";
import mongodb from "../../assets/icons/mongodb-icon.svg";
import mysql from "../../assets/icons/mysql-icon.svg";
import "./Stack.css"

function Stack() {
    const [stack, setStack] = useState([
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "ReactJS", icon: react },
      { name: "NodeJS", icon: node },
      { name: "ExpressJS", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
    ]);

    const mappedStack = stack.map(({icon, name}) => {
        return <SingleStack key={name} icon={icon} name ={name} />
    })
  return (
    <section className="stack">
        <div className="stack-inner">
              <h1 id="stack">TECH STACK</h1>

        <div className="stack-container">
        {mappedStack}
        </div>
        </div>
      
    </section>
  )
}

export default Stack