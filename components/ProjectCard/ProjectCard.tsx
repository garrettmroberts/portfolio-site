'use client';
import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { BiUpArrowAlt } from 'react-icons/bi';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  desc: string;
  imageSrc: string;
  link: string;
};

const ProjectCard: FC<Props> = ({ title, desc, imageSrc, link }) => {
  return (
    <div className={styles.projectCard}>
      <Image
        src={imageSrc}
        alt=""
        width={300}
        height={200}
        style={{ objectFit: 'fill' }}
        className={styles.image}
      />
      <div className={styles.textBlock}>
        <h4>
          <Link href={link} className={styles.link}>
            {title}
          </Link>
          <IconContext.Provider value={{ className: styles.icon }}>
            <BiUpArrowAlt />
          </IconContext.Provider>
        </h4>
        <p className={styles.bodyText}>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
