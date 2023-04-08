import React from "react";
import {
  Roderick,
  Dupin,
  Ulelume,
  Prospero,
  Ligeia,
  add,
} from "../../../images/images";
import styles from "./EdgarAlenPoe.module.css";

const EdgarAlenPoe = () => {
  const data = [
    { img: Roderick, title: "Roderick" },
    { img: Dupin, title: "Dupin" },
    { img: Ulelume, title: "Ulelume" },
    { img: Prospero, title: "Prospero" },
    { img: Ligeia, title: "Ligeia" },
  ];
  return (
    <div className={styles.edgarAlenPoe}>
      <div className={styles.imageAndPrice}>
        <img src={add} alt="#" className={styles.add} />
        <p className={styles.price}>$9.99</p>
      </div>
      <div className={styles.button}>
        <p className={styles.name}>Edgar Allen Poe</p>
      </div>
      <div className={styles.information}>
        {data.map((el, i) => (
          <div className={styles.titleAndImage} key={i}>
            <p className={styles.title}>{el.title}</p>
            <img src={el.img} alt="#" className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdgarAlenPoe;
