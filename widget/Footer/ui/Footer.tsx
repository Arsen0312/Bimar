import React from 'react';
import Image from "next/image";
import Link from "next/link";
import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.footer__left}>
                <Image src="/assets/logoBimar.svg" alt="logo" width={288} height={100}/>

                <div className={cls.footer__menu}>
                    <span>Лояльность</span>
                    <span>Скачать</span>
                    <span>Контакты</span>
                    <span>Где нас найти</span>
                </div>

                <div className={cls.footer__bottomText}>
                    <span>© 2025 BIMAR. Все права защищены.</span>
                    <span>•</span>
                    <span>Политика конфиденциальности</span>
                    <span>•</span>
                    <span>Политика конфиденциальности</span>
                </div>
            </div>

            <div className={cls.footer__right}>
                <div className={cls.footer__downloads}>
                    <div className={cls.footer__stores}>
                        <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622">
                            <Image src="/assets/appStroreWhiteIcon.svg" alt="logo" width={120} height={40}/>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar">
                            <Image src="/assets/googleStroreWhiteIcon.svg" alt="logo" width={120} height={40}/>
                        </Link>
                    </div>
                    <div className={cls.footer__contacts}>
                        <Link href="tel:+996500123456">Телефон: +996 500 123 456</Link>
                        <Link href="mailto:support@bimar.kg">Email: support@bimar.kg</Link>
                    </div>
                </div>

                <div className={cls.footer__socials}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bimar.kg">
                        <Image src="/assets/facebook.svg" alt="facebook" width={24} height={24}/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bimar.kg">
                        <Image src="/assets/instagram.svg" alt="instagram" width={24} height={24}/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@bimarkg">
                        <Image src="/assets/tiktok.svg" alt="tiktok" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
