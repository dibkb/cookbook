import React from "react";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
const links = ["Home", "Contact", "Menu", "About Us"];
const LinksContent = () => {
  const router = useRouter();
  const pathName = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "home";

  const handleClick = (element: string) => {
    const URL = element.split(" ")[0].toLocaleLowerCase();
    router.push(URL === "home" ? "/" : URL);
  };
  return (
    <div className={styles["linkContent"]}>
      {links.map((element) => {
        let active = false;
        console.log(router);
        if (element.split(" ")[0].toLocaleLowerCase() === pathName) {
          active = true;
        }
        return (
          <a
            key={element}
            className={active ? styles["link_active"] : styles["link"]}
            onClick={(e) => {
              e.preventDefault();
              handleClick(element);
            }}
          >
            {element}
          </a>
        );
      })}
      ;
    </div>
  );
};

const Navbar = () => {
  return (
    <main className={styles.navbar__Container}>
      <nav className={styles.nav}>
        <Image src={logo.src} alt="Logo" width={150} height={125}></Image>
      </nav>
      <LinksContent />
    </main>
  );
};

export default Navbar;
