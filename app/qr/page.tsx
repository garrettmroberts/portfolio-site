"use client"
import {QRCodeSVG} from 'qrcode.react';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const QRDisplay = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    return (
        <div className={styles.wrapper}>
            <QRCodeSVG
                value={"https://garrettroberts.dev/"}
                size={Math.min(windowDimensions.width * 0.8, 400)}
                bgColor={"#385170"}
                fgColor={"#ececec"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                    src: "./icon.png",
                    x: undefined,
                    y: undefined,
                    height: Math.min(windowDimensions.width * 0.1, 100),
                    width: Math.min(windowDimensions.width * 0.1, 100),
                    excavate: true,
                }}
            />
        </div>
    )

};

export default QRDisplay