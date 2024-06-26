'use client';
import React, { FC } from 'react';
import Section from '../Section/Section';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm';
import { IconContext } from 'react-icons';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const ContactSection: FC = () => {

  const isOnMobileDevice = () => {
    if (typeof window !== 'undefined') {
      return /iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent);
    }
    return false;
  }

  return (
    <Section id="contact-section">
      <h2 className={styles.sectionHeader}>Contact me</h2>
      <div className={styles.socialWrapper}>
        <Link
          href="https://github.com/garrettmroberts/"
          className={styles.link}
        >
          <IconContext.Provider value={{ className: styles.icon }}>
            <BsGithub />
          </IconContext.Provider>
          Github
        </Link>
        <Link
          href={ isOnMobileDevice() ? 'linkedin://profile/garrettmroberts' : 'https://www.linkedin.com/in/garrettmroberts/'}
          className={styles.link}
        >
          <IconContext.Provider value={{ className: styles.icon }}>
            <BsLinkedin />
          </IconContext.Provider>
          LinkedIn
        </Link>
      </div>
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
