'use client'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './ScrollTransition.module.css';

type Props = {
  children: ReactNode;
}

const ScrollTransition: FC<Props> = ({ children }) => {
  const componentRef = useRef(null);
  const [isEntering, setIsEntering] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  let options;

  useEffect(() => {
    options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.5, 1]
    }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       setIsEntering(true);
       setIsLeaving(false);
      } else {
        if (entry.boundingClientRect.y > 0) {
          setIsLeaving(true);
          setIsEntering(false);
        } else {
          setIsLeaving(false);
          setIsEntering(false);
        }
      }
    });
  }, options);

  if (componentRef.current) {
    observer.observe(componentRef.current);
  }

  return () => observer.disconnect();

  }, []);

  return (
    <>
        <div 
          ref={componentRef}
          className={[styles.scrollTransition, isEntering ? styles.entering : '', isLeaving ? styles.leaving : ''].join(' ')}
        >
          {children}
        </div>
    </>
  );
};

export default ScrollTransition;
