import React, { FC, ReactNode } from 'react';
import styles from './Section.module.css';

type Props = {
  id: string;
  children: ReactNode;
};

const Section: FC<Props> = ({ id, children }) => {
  return (
    <div className={styles.sectionWrapper} id={id}>
      <section className={styles.sectionContent}>{children}</section>
    </div>
  );
};

export default Section;
