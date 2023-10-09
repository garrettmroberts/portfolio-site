import React, { useState, FC } from 'react';
import styles from './MenuIcon.module.css';

type Props = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const MenuIcon: FC<Props> = ({ isMenuOpen, onClick }) => {
  const classes = `${styles.menuDropdownTrigger} ${
    isMenuOpen ? styles.active : ''
  }`;

  return (
    <div className={classes} onClick={onClick}>
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  );
};

export default MenuIcon;
