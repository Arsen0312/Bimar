import React from 'react';
import styles from './BonusCard.module.scss';

type TProps = {
    title: string;
    img: React.ReactElement;
};

const BonusCard = (props: TProps) => {
    const { title, img } = props;

    return (
        <span>
            <span className={styles.bonusCard}>
            <span className={styles.bonusCard__content}>
                <div className={styles.bonusCard__image}>
                    {img}
                </div>
                <span className={styles.bonusCard__title}>
                    {title}
                </span>
            </span>
        </span>
        </span>
    );
};

export default BonusCard;
