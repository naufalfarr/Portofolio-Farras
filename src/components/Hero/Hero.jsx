/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const handleButtonClick = () => {
        window.open("https://drive.google.com/drive/folders/1ilq5EeeK4bhkABeHqwJzOYHfxAaMQxVg?usp=sharing", "_blank");
    };

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Farras</h1>
                <p className={styles.description}>
                    I&apos;m an enthusiastic frontend web developer with a keen focus on creating seamless platforms with the React ecosystem.
                </p>
                <button className={styles.button} onClick={handleButtonClick}>
                    Resume
                </button>
                <div className={styles.arrows}>
                    <div className={styles.innerArrows}></div>
                </div>
            </div>
            <img
                src={getImageUrl("hero/fix.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
