import React from "react";
import styles from "./layout.module.scss";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout_content}>{children}</div>
    </div>
  );
};
export default Layout;
