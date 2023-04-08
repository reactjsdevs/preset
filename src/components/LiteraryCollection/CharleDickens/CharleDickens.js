import React from "react";
import {
  ChesneyWold,
  Gradgrind,
  Dotheboys,
  Tattycoram,
  Havisham,
} from "../../../images/images";
import styles from "./CharleDickens.module.css";

const CharleDickens = () => {
  const data = [
    { img: ChesneyWold, title: "Chesney Wold" },
    { img: Gradgrind, title: "Gradgrind" },
    { img: Dotheboys, title: "Dotheboys" },
    { img: Tattycoram, title: "Tattycoram" },
    { img: Havisham, title: "Havisham" },
  ];
  return (
    <div className={styles.charleDickens}>
      <div className={styles.button}>
        <p className={styles.name}>Charles Dickens</p>
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
export default CharleDickens;
