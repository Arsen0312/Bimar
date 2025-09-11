import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import cls from './Header.module.scss';
import BurgerMenu from "@/widget/Header/ui/BurgerMenu/ui/BurgerMenu";

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.header__mobile}>
                <Image src="assets/logoBimar.svg" alt="logo" width={144} height={50}/>
                <BurgerMenu />
            </div>
            <nav className={cls.header__nav}>
                <Image src="assets/logoBimar.svg" alt="logo" width={144} height={50}/>
                <div className={cls.header__menu}>
                    <Link href="#Лояльность" className={cls.header__link}>Программа лояльности</Link>
                    <Link href="#Скачать" className={cls.header__link}>Скачать</Link>
                    <Link href="#Карта" className={cls.header__link}>Карта</Link>
                    <Link href="#Карта" className={cls.header__link}>Где нас найти</Link>
                </div>
                <div className={cls.header__socials}>
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
            </nav>
        </header>
    );
};

export default Header;
