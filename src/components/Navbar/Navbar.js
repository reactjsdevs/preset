import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={styles.navbar}>
      <RxHamburgerMenu
        className={styles.hamburger}
        onClick={() => setSidebar((prev) => !prev)}
      />

      <div
        className={[styles.navItemsContainer, sidebar && styles.sidebar].join(
          " "
        )}
      >
        {sidebar && (
          <MdOutlineClose
            className={styles.close}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
        <div className={styles.navItems}>
          <NavLink to="/" className={styles.navItem}>
            Instruction
          </NavLink>
          <NavLink to="/" className={styles.navItem}>
            account
          </NavLink>
        </div>
        <div className={styles.navItems}>
          <NavLink to="/" className={styles.navItem}>
            weblog
          </NavLink>
          <NavLink to="/" className={styles.navItem}>
            write to us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
