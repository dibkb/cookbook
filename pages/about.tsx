import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.scss";
const about = () => {
  return (
    <>
      <main className={styles.container}>
        <Navbar />
        <section>ABOUT US</section>
      </main>
    </>
  );
};

export default about;
