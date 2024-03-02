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
                <span className={styles.content1}>Hello!👋 My name is <b>Naufal Farras</b><span className={styles.specialContent2}><b> Trikusuma</b></span>, you can call me <b>farras</b>, 
                    I&apos;m currently an undergraduate Computer Engineering student 
                    at University of Brawijaya. 
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
                <span className={styles.content5}>As an IT Enthusiast, I have several project with techstack like React, Tailwind CSS, etc. </span>  
                <span className={styles.specialContent}>I&apos;m a passionate learner 
                who&apos;s always willing to learn and work across technologies.
                </span>
                </span>
                <span className={styles.specialContent2}>
                I have demonstrated a strong focus on developing platforms, contributing effectively to various projects. 
                I have enthusiasm for exploring and working with diverse technologies reflects 
                a proactive attitude in opportunities within the tech industry.
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
