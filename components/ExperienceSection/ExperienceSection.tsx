import React, { FC, useState } from 'react';
import Section from '../Section/Section';
import styles from './ExperienceSection.module.css';
import Accordion from '../Accordion/Accordion';

const ExperienceSection: FC = () => {
  return (
    <Section id="experience-section">
      <h2 className={styles.sectionHeader}>Professional Experience</h2>
      <Accordion />
    </Section>
  );
};

export default ExperienceSection;
