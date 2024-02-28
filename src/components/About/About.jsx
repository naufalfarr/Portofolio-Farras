/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img
        src={getImageUrl("about/boy_4202839.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            {/* <h3>Frontend Developer</h3> */}
            <p>
                <span className={styles.content1}>Hello!👋 My name is Naufal Farras and I&apos;m from Bekasi,
                    I&apos;m currently studying Computer Engineering 
                    at University of Brawijaya. 
                </span>
                <span className={styles.content2}>
                I&apos;m a passionate learner 
                who&apos;s always willing to learn and work across technologies.
                </span>
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img className={styles.icon} src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            {/* <h3>Backend Developer</h3> */}
            <p>
                <span className={styles.content3}>
                <span className={styles.content5}>As a IT Enthusiast, I  have several project with techstack like </span>  
                React, Tailwind CSS, etc.
                </span>
                <span className={styles.content4}>
                I enjoy learning something new and getting feedback to make myself better and improve.
                </span>
            </p>
            </div>
        </li>
        {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
                I have designed multiple landing pages and have created design
                systems as well
            </p>
            </div>
        </li> */}
        </ul>
    </div>
    </section>
);
};
