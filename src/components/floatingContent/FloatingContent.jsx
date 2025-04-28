import React from "react";
import CommandPrompt from "../commandPrompt/CommandPrompt";
import styles from "./FloatingContent.module.css";

const FloatingContent = () => {
  return (
    <div className={styles.content}>
      {/* <section> */}
      <h3>Contact Info</h3>
      <p>Email: mos.qobadi@gmail.com</p>
      <p>Github: github.com/MosQobadi</p>
      <CommandPrompt />
      {/* </section> */}
    </div>
  );
};

export default FloatingContent;
