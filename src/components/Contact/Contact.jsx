/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <p>Reach me out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <a href="mailto:farrasn7@gmail.com" target="blank__">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </a>
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/naufalfarr/" target="blank__">          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
        /></a>
        </li>
        <li className={styles.link}>
        <a href="https://www.github.com/naufalfarr" target="blank__">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        </a>
        </li>
    </ul>
    </footer>
);
};
