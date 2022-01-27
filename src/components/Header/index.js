import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>My Weather App</span>
    </div>
  );
};
export default Header;
