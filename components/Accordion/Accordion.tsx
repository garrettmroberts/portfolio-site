'use client';
import React, { FC, useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from '../AccordionItem/AccordionItem';
import Jobs from '../../util/jobs';

const Accordion: FC = () => {
  const [openFolder, setOpenFolder] = useState<number>(0);

  const handleToggle = (index: number) => {
    openFolder === index ? setOpenFolder(-1) : setOpenFolder(index);
  };

  return (
    <div className={styles.accordion}>
      {Jobs.map((job, idx) => (
        <AccordionItem
          job={job}
          key={idx}
          onToggle={() => handleToggle(idx)}
          active={openFolder === idx}
        />
      ))}
    </div>
  );
};

export default Accordion;
