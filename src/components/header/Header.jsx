import React from "react";
import styles from "../../styles/Header/header.module.css";
function Header() {
  return (
    <div className={styles.header}>
        {/* logo */}
      <div className={styles.logo}>
        <div className={styles.box}>
          {" "}
          <p className={styles.p}>AR</p>
        </div>
        <div>
          <p className={styles.name}>Arash Sakian</p>
        </div>
      </div>
      {/* links */}
      <div className={styles.link}>
        <li className={styles.li}>
            <ul>Home</ul>
            <ul>Work</ul>
            <ul>About</ul>
            <ul>Contact</ul>
        </li>
      </div>
    </div>
  );
}

export default Header;
