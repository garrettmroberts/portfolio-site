'use client';
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './NavLink.module.css';

type Props = {
  href: string;
  children?: ReactNode;
  onClick?: () => void;
};

const NavLink: FC<Props> = ({ href, children, onClick }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    })

    if (onClick) onClick();
  }
  return (
    <Link className={styles.navLink} href={`#${href}`} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default NavLink;
