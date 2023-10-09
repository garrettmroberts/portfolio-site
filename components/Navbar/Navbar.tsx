'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import MenuIcon from '../MenuIcon/MenuIcon';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className={styles.navbar}>
        <Logo size="3em" />
        <div className={styles.mobileMenuDropdownTrigger}>
          <MenuIcon isMenuOpen={showDropdown} onClick={toggleDropdown} />
        </div>
        <nav className={styles.navigationLinks}>
          <NavLink href="about-section">
            <h3 className={styles.navLink}>
              <span className={styles.number}>01.</span> About
            </h3>
          </NavLink>
          <NavLink href="experience-section">
            <h3 className={styles.navLink}>
              <span className={styles.number}>02.</span> Experience
            </h3>
          </NavLink>
          <NavLink href="project-section">
            <h3 className={styles.navLink}>
              <span className={styles.number}>03.</span> Projects
            </h3>
          </NavLink>
          <NavLink href="contact-section">
            <h3 className={styles.navLink}>
              <span className={styles.number}>04.</span> Contact
            </h3>
          </NavLink>
        </nav>
      </div>
      <nav
        className={styles.mobileNavigationLinks}
        style={{
          transform: showDropdown ? 'translate(0%)' : 'translate(-100%)',
        }}
      >
        <NavLink href="about-section" onClick={toggleDropdown}>
          <h3 className={styles.navLink}>
            <span className={styles.number}>01.</span> About
          </h3>
        </NavLink>
        <NavLink href="experience-section" onClick={toggleDropdown}>
          <h3 className={styles.navLink}>
            <span className={styles.number}>02.</span> Experience
          </h3>
        </NavLink>
        <NavLink href="project-section" onClick={toggleDropdown}>
          <h3 className={styles.navLink}>
            <span className={styles.number}>03.</span> Projects
          </h3>
        </NavLink>
        <NavLink href="contact-section" onClick={toggleDropdown}>
          <h3 className={styles.navLink}>
            <span className={styles.number}>04.</span> Contact
          </h3>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
