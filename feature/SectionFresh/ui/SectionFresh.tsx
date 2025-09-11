"use client";

import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./SectionFresh.module.scss";

const staticDate = [
    {
        title: "Программа лояльности",
        description: "Акции и бонусы для наших почётных клиентов: скидки, кэшбэк, подарок в день рождения, участие в промо-акциях и многое другое.  Станьте почётным клиентом в 2 клика: скачайте приложение \n" +
            "в App Store или Play Market и пользуйтесь всеми привилегиями.",
    }, {
        title: "Готовые блюда и комфорт",
        description: "Свежие готовые блюда и выпечка — для профессионалов, которые ценят вкусную и доступную еду на обед в плотном графике.  Современные стандарты обслуживания и комфорт в каждом магазине.",
    }, {
        title: "Программа лояльности",
        description: "Акции и бонусы для наших почётных клиентов: скидки, кэшбэк, подарок в день рождения, участие в промо-акциях и многое другое.  Станьте почётным клиентом в 2 клика: скачайте приложение \n" +
            "в App Store или Play Market и пользуйтесь всеми привилегиями.",
    },

]

const SectionFresh = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20%",
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderBackground}>
                <div className={styles.sliderContainer}>
                    <Slider {...sliderSettings}>
                        {staticDate.map((item, index) => (
                            <div className={styles.sliderItemWrapper} key={index}>
                                <div className={styles.sliderItem}>
                                    <h4 className={styles.sliderItem__title}>{item.title}</h4>
                                    <p className={styles.sliderItem__description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SectionFresh;
