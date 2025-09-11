import React from "react";
import styles from "./TextCurds.module.scss";

type TProps = {
    title: string;
    description: string;
};

const TextCurds = ({ title, description }: TProps) => {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default TextCurds;