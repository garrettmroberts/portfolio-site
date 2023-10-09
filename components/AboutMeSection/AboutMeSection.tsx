import React, { FC } from 'react';
import Section from '../Section/Section';
import styles from './AboutMeSection.module.css';
import NavLink from '../NavLink/NavLink';

const AboutMeSection: FC = () => {
  return (
    <Section id="about-section">
      <div>
        <h4 className={styles.small}>Hi, my name is</h4>
        <h1 className={styles.mainHeader}>Garrett Roberts.</h1>
        <h1 className={styles.secondaryHeader}>
          I build scalable full-stack solutions for mobile devices and the web.
        </h1>
      </div>
      <p className={styles.bodyText}>
        Passionate software developer and consultant with a strong drive to make
        a difference through technology. I thrive on crafting innovative
        solutions and collaborating with clients to achieve their business
        objectives.
      </p>
      <NavLink href="contact-section">
        <p className={styles.contactButton}>Let&apos;s connect</p>
      </NavLink>
    </Section>
  );
};

export default AboutMeSection;
