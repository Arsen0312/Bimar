"use client";

import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./SectionCertificate.module.scss";

const SectionCertificate = () => {
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
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Подарочные сертификаты</h2>
                <p className={styles.description}>
                    Дарите вкус и заботу вашим близким. Наши подарочные сертификаты — это
                    возможность выбрать любимые продукты, турецкие деликатесы и свежие
                    блюда в любое удобное время
                </p>
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.sliderBackground}>
                    <div className={styles.sliderContainer}>
                        <Slider {...sliderSettings}>
                            {[1, 2, 3].map((id) => (
                                <Image
                                    key={id}
                                    src="/assets/Cертификат.svg"
                                    alt="Сертификат"
                                    width={783}
                                    height={380}
                                    className={styles.certificateImage}
                                    priority
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCertificate;
