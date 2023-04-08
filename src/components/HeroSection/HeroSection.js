import React from "react";
import { curl, electric, heroStars, preset } from "../../images/images";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img src={heroStars} alt="#" className={styles.image} />

      <div className={styles.textContainer}>
        <img src={curl} alt="#" className={styles.curl} />
        <p className={styles.text}>
          Instantly Transform Your Photographs With <br /> Machine-Age Wizardry!
          <br /> As If From Outer Space!
        </p>
        <img src={curl} alt="#" className={styles.curl} />
      </div>

      <img src={electric} alt="#" className={styles.electric} />
      <h4 className={styles.title}>examine the stunning proof below!</h4>
      <img src={preset} alt="#" className={styles.preset} />
    </section>
  );
};

export default HeroSection;
