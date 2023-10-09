'use client';
import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaLocationDot } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import Image from 'next/image';
import styles from './AccordionItem.module.css';

type Props = {
  job: any;
  onToggle: () => void;
  active: boolean;
};

const AccordionItem: FC<Props> = ({ job, onToggle, active }) => {
  return (
    <>
      <div className={styles.accordionItemHeader} onClick={onToggle}>
        <p className={styles.headerTitle}>{job.title}</p>
        <p className={styles.headerDate}>{job.date}</p>
        <div
          className={[
            styles.accordionItemTrigger,
            active ? styles.open : '',
          ].join(' ')}
        >
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
      </div>
      <div
        className={[styles.accordionItemBody, active ? '' : styles.hidden].join(
          ' '
        )}
      >
        <div>
          <h4 className={styles.bodyHeaderText}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaLocationDot />
            </IconContext.Provider>
            {job.location}
          </h4>
          <h4 className={styles.bodyHeaderText}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <CgWebsite />
            </IconContext.Provider>
            <a
              className={styles.link}
              href={`https://${job.website}`}
              target="_blank"
            >
              {job.website}
            </a>
          </h4>
          <p className={styles.accordionBodyText}>{job.description}</p>
          <div className={styles.frameworksList}>
            {job.frameworks.map((fw: any) => (
              <p className={styles.frameworkIcon} key={fw}>
                {fw}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={require(`../../public/${job.logo}`)}
          alt={`${job.title} logo`}
          width={100}
        />
      </div>
    </>
  );
};

export default AccordionItem;
