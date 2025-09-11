import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./LocationCurd.module.scss";

type TProps = {
    title: string;
    imgSrc: string;
    workSchedule: string;
    phoneNumber: string;
}

const LocationCurd = (props: TProps) => {
    const {title, phoneNumber, workSchedule, imgSrc} = props;

    return (
        <div className={styles.locationCurd}>
            <div className={styles.wrapperImg}>
                <Image
                    alt=""
                    src={imgSrc}
                    width={215}
                    height={150}
                />
            </div>
            <div className={styles.locationCurd__content}>
                <h3 className={styles.locationCurd__title}>
                    {title}
                </h3>
                <div className={styles.locationCurd__info}>
                    <div className={styles["locationCurd__info-row"]}>
                        <Image alt="" src="/assets/time.svg" width={18} height={18}/>
                        <span>{workSchedule}</span>
                    </div>
                    <div className={styles["locationCurd__info-row"]}>
                        <Image alt="" src="/assets/telephon.svg" width={18} height={18}/>
                        <Link href={`tel:${phoneNumber}`}><span>{phoneNumber}</span></Link>
                    </div>
                    <button className={styles.locationCurd__button}>
                        Свернуть
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationCurd;
