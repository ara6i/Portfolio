import React from "react";
import Header from "../header/Header";
import styles from "../../styles/Home/home.module.css"
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Home;
