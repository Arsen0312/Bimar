"use client"

import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import 'leaflet/dist/leaflet.css';

import TextCurds from "@/feature/TextCurd/TextCurds";
import SectionCertificate from "@/feature/SectionCertificate/ui/SectionCertificate";
import BonusCurd from "@/feature/BonusCurd/BonusCurd";
import CurdStoreForMap from "@/feature/CurdStoreForMap/ui/CurdStoreForMap";
import {ScrollArea} from "@/components/ui/scroll-area";

import styles from "./page.module.scss";
import {cn} from "@/lib/utils";
import SectionFresh from "@/feature/SectionFresh/ui/SectionFresh";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger} from "@/components/ui/select";
import BimarMap from "@/feature/Map/BimarMap";

export type TShops = {
    name: string;
    coords: [number, number];
    duringWork: string;
    srcImg: string;
    address: string;
    region: "Бишкек" | "Ош" | "";
    phoneNumber: string
}

const shops: TShops[] = [
    {
        name: "БИМАР-1 ДЖАЛ",
        coords: [42.833487, 74.568796],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Тыналиева, 7",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-2 МЕТРО",
        coords: [42.837437, 74.56853],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Тыналиева, 5/1",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-3 МОСКОВСКАЯ",
        coords: [42.868803, 74.619765],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Московская, 56/2",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-4 ОШ",
        coords: [40.543388, 72.801329],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Ош, улица Раимбекова, 18а",
        region: "Ош",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-5 ТОКТОГУЛА",
        coords: [42.871996, 74.600903],
        duringWork: "07:00-01:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Токтогула, 116",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-6 АНГЛИЙСКИЙ",
        coords: [42.818518, 74.615044],
        duringWork: "07:00-01:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Аалы Токомбаева, 24",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-7 СТАМБУЛ",
        coords: [42.838196, 74.564129],
        duringWork: "07:00-00:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, мкр. Джал-23, 28",
        region: "Бишкек",
        phoneNumber: ""
    },
    {
        name: "БИМАР-8 РИОМ",
        coords: [42.872662, 74.433471],
        duringWork: "08:00-02:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "с. Кожомкул, улица Фрунзе, 193/5",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-9 ОШ ГУРМЕ",
        coords: [40.548636, 72.799938],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Ош, улица Карасуйская, 17а",
        region: "Ош",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-10 ОШ МАКСКОМ",
        coords: [40.51255, 72.819563],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Ош, улица Аскара Шакирова, 30",
        region: "Ош",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-12 ШЕРОЙ",
        coords: [42.835477, 74.566536],
        duringWork: "07:00-01:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Тыналиева, 3/12",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-13 ДОСТОЕВСКИЙ",
        coords: [42.841249, 74.649762],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Кок-Жангак, 47а/1",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-14 НЕКРАСОВА",
        coords: [42.865807, 74.568962],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Льва Толстого, 19/5",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-15 ТЮЛЬПАН",
        coords: [42.879885, 74.611539],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Юсупа Абдрахманова, 204",
        region: "Бишкек",
        phoneNumber: ""
    },
    {
        name: "БИМАР-16 СИЛКВЕЙ",
        coords: [42.882526, 74.594011],
        duringWork: "07:00-01:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Коенкозова, 119",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-17 ОШ АМАНАТ",
        coords: [40.50317, 72.813723],
        duringWork: "07:00-01:00",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Ош, улица Пайзилды Айтмаматова, 3",
        region: "Ош",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-18 БАХА",
        coords: [42.843222, 74.560662],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Садырбаева, 117-119",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    },
    {
        name: "БИМАР-19 МАЕВКА",
        coords: [42.909002, 74.573436],
        duringWork: "24/7",
        srcImg: "/assets/BimarPreviow.jpg",
        address: "г.Бишкек, улица Махатмы Ганди, 426/1",
        region: "Бишкек",
        phoneNumber: "996 990‒90‒08‒44"
    }
];

type TIsSelectedState = {
    center: [number, number];
    region: "Бишкек" | "Ош";
    zoom: number;
}

const srcImgMain = "/assets/mainImageBimar.png"

const regionList: TIsSelectedState[] = [
    {
        center: [42.8746, 74.5698],
        region: "Бишкек",
        zoom: 12
    },
    {
        center: [40.517223, 72.80564],
        region: "Ош",
        zoom: 12
    }
]

const Page = () => {
    const [isSelectRegion, setIsSelectRegion] = useState<TIsSelectedState>({
        center: [42.8746, 74.5698],
        region: "Бишкек",
        zoom: 12
    });

    useEffect(() => {
        setIsShops(shops.filter((shop) => shop.region === isSelectRegion.region))
    }, [])

    const [isShops, setIsShops] = useState<TShops[]>(shops);

    const onChangeRegion = (regionName: ("Бишкек" | "Ош")) => {
        if (isSelectRegion.region === regionName) {

        } else {
            setIsSelectRegion(regionList.find(region => region.region === regionName)!)
            setIsShops(() => shops.filter(shop => shop.region === regionName))
        }
    }

    return (
        <main className={styles.main}>
            {/* HERO */}
            <section className={styles.hero}>
                <Image
                    src={srcImgMain}
                    alt="/assets/image_3.svg"
                    width={1240}
                    height={600}
                />
            </section>

            {/* INTRO */}
            <section className={styles.intro}>
                <div className={styles.intro__titleWrap}>
                    <h2 className={styles.intro__h2}>
                        <div>Первая безалкогольная сеть</div>
                        <div>в Центральной Азии</div>
                    </h2>
                </div>

                <div className={styles.intro__row}>
                    <div
                        className={styles.intro__imageWrap}
                        style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                    >
                        <Image
                            className={styles.intro__image}
                            src="/assets/IMG_2188 1.svg"
                            alt="imgMagazinBimar"
                            width={580}
                            height={580}
                        />
                    </div>

                    <div className={styles.intro__cards}>
                        <span className={styles.intro__cardWrapper}>
                            <div className={styles.intro__card}>
                            <span className={styles.intro__cardNumber}>30</span>
                            <span className={styles.intro__cardText}>
                                супермаркетов в 2025 году
                            </span>
                        </div>
                        </span>
                        <span className={styles.intro__cardWrapper}>
                            <div className={styles.intro__card}>
                            <span className={styles.intro__cardNumber}>20 000 +</span>
                            <span className={styles.intro__cardText}>
                                Покупок ежедневно
                            </span>
                        </div>
                        </span>
                        <span className={styles.intro__cardWrapper}>
                            <div className={styles.intro__card}>
                            <span className={styles.intro__cardNumber}>10 000 +</span>
                            <span className={styles.intro__cardText}>
                                Разнообразие ассортимента
                            </span>
                        </div>
                        </span>

                    </div>
                </div>
            </section>

            {/* FRESH PRODUCTS (desktop only) */}
            <section className={styles.fresh}>
                <div className={styles.fresh__titleWrap}>
                    <h2 className={styles.fresh__h2}>
                        <div>BIMAR - Свежие продукты и турецкие деликатесы</div>
                        <div>каждый день</div>
                    </h2>
                </div>

                <div className={styles.fresh__group}>
                    <div className={styles.fresh__groupRow}>
                        <TextCurds
                            title="Свежие продукты каждый день"
                            description="Каждый день — свежее халал мясо, овощи, фрукты, молочная продукция, турецкие и импортные деликатесы: суджук, оливки, специи, сухофрукты, традиционные сладости и многое другое для вкусных завтраков и семейных ужинов."
                        />
                        <Image
                            src="/assets/FreshProduce.svg"
                            priority
                            alt="FreshProduce"
                            width={312}
                            height={312}
                        />
                    </div>

                    <div className={styles.fresh__groupRow}>
                        <Image
                            src="/assets/ReadyMeals.svg"
                            priority
                            alt="ReadyMeals"
                            width={312}
                            height={312}
                        />
                        <TextCurds
                            title="Готовые блюда и комфорт"
                            description="Свежие готовые блюда и выпечка — для профессионалов, которые ценят вкусную и доступную еду на обед в плотном графике. Современные стандарты обслуживания и комфорт в каждом магазине."
                        />
                    </div>

                    <div className={styles.fresh__groupRow}>
                        <TextCurds
                            title="Программа лояльности"
                            description="Акции и бонусы для наших почётных клиентов: скидки, кэшбэк, подарок в день рождения, участие в промо-акциях и многое другое. Станьте почётным клиентом в 2 клика: скачайте приложение в App Store или Play Market и пользуйтесь всеми привилегиями."
                        />
                        <div className={styles.fresh__groupImagesCol}>
                            <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622">
                                <Image src="/assets/appStore.svg" priority alt="appStore" width={320} height={107}/>
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar">
                                <Image src="/assets/googleStrore.svg" priority alt="googleStrore" width={320}
                                       height={107}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <SectionFresh/>
            </section>

            {/* CERTIFICATES */}
            <SectionCertificate/>

            {/* LOYALTY */}
            <section className={styles.loyalty} id="Лояльность">
                <div className={styles.loyalty__titleWrap}>
                    <h2 className={styles.loyalty__h2}>Копите бонусы с BIMAR!</h2>
                    <p className={styles.loyalty__p}>
                        Участвуйте в нашей программе и получайте до 10% стоимости покупок обратно в виде бонусов
                    </p>
                </div>

                <div className={styles.loyalty__row}>
                    <div className={styles.loyalty__row__wrapper}>
                        <div
                            className={styles.loyalty__left}
                            style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                        >
                            <Image
                                src="/assets/iPhone_screen3_option3.svg"
                                priority
                                alt="iPhone_screen3_option3"
                                width={336}
                                height={705}
                                className={styles.loyalty__left__phoneImg}
                            />
                        </div>
                    </div>

                    <div className={styles.loyalty__right}>
                        <BonusCurd
                            title="Бонусы за каждую покупку"
                            img={<Image src="/assets/teleshka.svg" priority width={154} height={154}
                                        alt="teleshka"/>}
                        />
                        <BonusCurd
                            title="Моментальное зачисление через QR"
                            img={<Image src="/assets/lego.svg" priority width={154} height={154} alt="lego"/>}
                        />
                        <BonusCurd
                            title="Обменяйте бонусы на скидки и подарки"
                            img={<Image src="/assets/podarok.svg" priority width={154} height={154} alt="podarok"/>}
                        />
                    </div>
                </div>
            </section>

            {/* BONUS CARD */}
            <section className={styles.bonusCard}>
                <div className={styles.bonusCard__titleWrap}>
                    <h2 className={styles.bonusCard__h2}>Ваша бонусная карта — ключ к выгодным покупкам</h2>
                    <p className={styles.bonusCard__p}>
                        Копите и тратьте бонусы легко — в любом магазине BIMAR.
                    </p>
                </div>
                <Image
                    alt="subsection"
                    src="/assets/subsection.svg"
                    className={cn("max-md:!hidden", styles.bonusCard__image)}
                    width={1440}
                    height={715}
                />
                <Image
                    alt="subsection"
                    src="/assets/subsectionMb.svg"
                    className={cn("md:!hidden", styles.bonusCard__image)}
                    width={1100}
                    height={357}
                />
            </section>

            {/* DOWNLOAD APP */}
            <section className={styles.download} id="Скачать">
                <div className={styles.download__titleWrap}>
                    <h2 className={styles.download__h2}>Ваш супермаркет в телефоне</h2>
                    <p className={styles.download__p}>
                        Скачайте бесплатное приложение BIMAR для iOS и Android — акции, бонусы и избранное всегда под
                        рукой.
                    </p>
                </div>

                <div className={styles.download__stage}>
                    <div
                        className={styles.download__bg}
                        style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                    >
                        <Image
                            src="/assets/iphone.svg"
                            priority
                            alt="iphone"
                            width={980}
                            height={857}
                            className="phone"
                        />
                    </div>

                    <div className={styles.download__stores}>
                        <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622">
                            <Image src="/assets/appStore.svg" priority alt="appStore" width={320} height={107}/>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar">
                            <Image src="/assets/googleStrore.svg" priority alt="googleStrore" width={320} height={107}/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className={styles.map} id="Карта">
                <div className={styles.map__titleWrap}>
                    <h2 className={styles.map__h2}>Где нас найти</h2>
                    <p className={styles.map__p}>
                        Здесь отмечены все филиалы сети BIMAR. Выберите ближайший, чтобы узнать точный адрес и время
                        работы.
                    </p>
                </div>

                <div className={styles.map__content}>
                    <div className={styles.map__mapCol}>
                        <BimarMap shops={isShops} center={isSelectRegion.center} zoom={isSelectRegion.zoom} />
                    </div>
                    <div className={styles.map__listCol}>
                        <div className={styles.map__listCol__title}>
                            <span className={styles.map__listCol__title__addres}>Наши адреса</span>
                            <Select value={isSelectRegion.region} onValueChange={onChangeRegion}>
                                <SelectTrigger className="w-[280px] w-fit">
                                    <span className={styles.map__listCol__title__subtitleCity}>г. {isSelectRegion.region}:</span>
                                </SelectTrigger>
                                <SelectContent className={styles.selectContent}>
                                    <SelectGroup className={styles.selectContent__group}>
                                        <SelectItem className={styles.selectContent__group__item} value="Бишкек">Бишкек</SelectItem>
                                        <SelectItem className={styles.selectContent__group__item} value="Ош">Ош</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <ScrollArea className={styles.scrollWrap}>
                            <div className={styles.list}>
                                {isShops.map((location, idx) => (
                                    <CurdStoreForMap
                                        key={idx}
                                        duringWork={location.duringWork}
                                        name={location.name}
                                        coords={location.coords}
                                        onClick={(coords) => {
                                            if (coords) {
                                                setIsSelectRegion((prev) => ({
                                                    ...prev,
                                                    zoom: 16, // Высокий зум при клике на магазин
                                                    center: coords
                                                }));
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
