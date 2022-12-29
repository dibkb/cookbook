import React from "react";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={logo.src} alt="Logo" width={150} height={125}></Image>
    </nav>
  );
};

export default Navbar;
