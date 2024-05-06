"use client"
import {QRCodeSVG} from 'qrcode.react';
import styles from './page.module.css';


const QRDisplay = () => {
    return (
        <div className={styles.wrapper}>
            <QRCodeSVG
                value={"https://garrettroberts.dev/"}
                size={250}
                bgColor={"#385170"}
                fgColor={"#ececec"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                    src: "./icon.png",
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true
                }}
            />
        </div>
    )

};

export default QRDisplay