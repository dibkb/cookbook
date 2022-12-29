import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.scss";
const contact = () => {
  return (
    <>
      <main className={styles.container}>
        <Navbar />
        <section>Contact</section>
      </main>
    </>
  );
};

export default contact;
