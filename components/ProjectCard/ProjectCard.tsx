'use client';
import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { BiUpArrowAlt } from 'react-icons/bi';
import styles from './ProjectCard.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  desc: string;
  imageSrc: string | StaticImageData;
  link: string;
};

const ProjectCard: FC<Props> = ({ title, desc, imageSrc, link }) => {
  return (
    <Link href={link} className={styles.link} target='_blank'>
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
            {title}
            <IconContext.Provider value={{ className: styles.icon }}>
              <BiUpArrowAlt />
            </IconContext.Provider>
          </h4>
          <p className={styles.bodyText}>{desc}</p>
        </div>
      </div>
    </Link>

  );
};

export default ProjectCard;
