import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  let [isNavOpen, setIsNavOpen] = useState(false);
  let navItems = classNames(styles.item, { [styles.hidden]: !isNavOpen });
  let navBar = classNames(styles.navbar, {
    [styles.hideNav]: !isNavOpen,
    [styles.showNav]: isNavOpen,
  });

  return (
    <nav className={navBar}>
      <ul className={styles.options}>
        <li className={navItems}>
          <Link href="/">
            <a className={styles.link}> Home </a>
          </Link>
        </li>
        <li className={navItems}>
          <Link href="/contact">
            <a className={styles.link}> Contact </a>
          </Link>
        </li>
      </ul>
      <button
        className={styles.button}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <MenuIcon color="white" />
      </button>
    </nav>
  );
}
