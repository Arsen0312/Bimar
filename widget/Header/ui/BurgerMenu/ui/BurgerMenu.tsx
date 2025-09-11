"use client"

import React, {useState} from "react";
import cls from "./BurgerMenu.module.scss";
import Link from "next/link";
import {classes} from "@/lib/classes";
import Image from "next/image";

const BurgerMenu = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenModal(prev => !prev)} className={cls.burgerMenuTrigger}>
                <span className={classes(cls.burgerMenuTrigger__line, openModal && cls.burgerMenuTrigger__lineOneTransform)}></span>
                <span className={classes(cls.burgerMenuTrigger__line, openModal && cls.burgerMenuTrigger__lineTwoTransform )}></span>
                <span className={classes(cls.burgerMenuTrigger__line, openModal && cls.burgerMenuTrigger__lineThreeTransform )}></span>
            </button>
            <div className={[cls.burgerMenu, openModal ? cls.open : ""].join(" ")}>
                <div className={cls.burgerMenu__links}>
                    <Link href="#Лояльность" onClick={() => setOpenModal(false)}
                          className={cls.burgerMenu__links__link}>Программа лояльности</Link>
                    <Link href="#Скачать" onClick={() => setOpenModal(false)}
                          className={cls.burgerMenu__links__link}>Скачать</Link>
                    <Link href="#Карта" onClick={() => setOpenModal(false)}
                          className={cls.burgerMenu__links__link}>Карта</Link>
                    <Link href="#Карта" onClick={() => setOpenModal(false)} className={cls.burgerMenu__links__link}>Где
                        нас найти</Link>
                </div>
                <div className={cls.burgerMenu__socials}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bimar.kg">
                        <Image src="assets/facebook.svg" alt="facebook" width={24} height={24}/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bimar.kg">
                        <Image src="assets/instagram.svg" alt="instagram" width={24} height={24}/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@bimarkg">
                        <Image src="assets/tiktok.svg" alt="tiktok" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;