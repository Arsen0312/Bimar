"use client";

import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import L from 'leaflet';
import cls from "./MapComponent.module.scss"
import LocationCurd from "@/feature/LocationCurd/ui/LocationCurd";
import {TShops} from "@/app/page";
import { useEffect } from 'react';

// Исправляем проблему с иконками в Leaflet
// Этот код выполняется только на клиенте, так что window доступен

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: '/assets/locationShops.svg',
    iconRetinaUrl: '/assets/locationShops.svg',
    shadowUrl: '',
});

// Этот компонент будет обновлять центр карты при изменении props
function ChangeMapCenter({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);

    return null;
}

// Определение типа props для компонента
type TProps = {
    shops: TShops[]
    center: [number, number]
    zoom: number
}

export default function MapComponent({ shops, center, zoom }: TProps) {
    console.log(shops, center, zoom)
    return (
        <div className="w-full h-full relative">
            <MapContainer
                center={center}
                zoom={zoom}
                style={{height: '100%', width: '100%'}}
            >
                <ChangeMapCenter center={center} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {shops.map((shop, index) => (
                    <Marker key={index} position={[shop.coords[0], shop.coords[1]]}>
                        <Popup key={index} position={[shop.coords[0], shop.coords[1]]} className={cls.popupWrapper}>
                            <LocationCurd title={shop.name} imgSrc={shop.srcImg} workSchedule={shop.duringWork}
                                          phoneNumber={shop.phoneNumber}/>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}