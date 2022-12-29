import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Menu.module.scss";
const menu = () => {
  return (
    <>
      <main className={styles.container}>
        <Navbar />
        <section>MENU</section>
      </main>
    </>
  );
};

export default menu;
