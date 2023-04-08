import React from "react";
import styles from "./LiteraryCollection.module.css";
import { star } from "../../images/images";
import EdgarAlenPoe from "./EdgarAlenPoe/EdgarAlenPoe";
import CharleDickens from "./CharleDickens/CharleDickens";

const LiteraryCollection = () => {
  return (
    <section className={styles.literaryCollection}>
      <div className={styles.titleContainer}>
        <img src={star} alt="#" className={styles.star} />
        <h2 className={styles.title}>Literary Collections</h2>
        <img src={star} alt="#" className={styles.star} />
      </div>
      <CharleDickens />
      <EdgarAlenPoe />
    </section>
  );
};

export default LiteraryCollection;
