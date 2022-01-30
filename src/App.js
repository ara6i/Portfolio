import React from "react";
import Home from "./components/Home/Home";
import styles from "./styles/app.module.css";
function App() {
  return (
    <div className={styles.app}>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
