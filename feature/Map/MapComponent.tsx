"use client";

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import cls from "./MapComponent.module.scss"
import LocationCurd from "@/feature/LocationCurd/ui/LocationCurd";
import {TShops} from "@/app/page";

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

// Определение типа props для компонента
type TProps = {
    shops: TShops[]
}

export default function MapComponent({ shops }: TProps) {
    console.log(shops)
    return (
        <div className="w-full h-full relative">
            <MapContainer
                center={[42.8746, 74.5698]}
                zoom={12}
                style={{height: '100%', width: '100%'}}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {shops.map((shop, index) => (
                    <Marker key={index} position={[shop.coords[0], shop.coords[1]]}>
                        <Popup key={index} position={[shop.coords[0], shop.coords[1]]} className={cls.popupWrapper}>
                            <LocationCurd title={shop.name} imgSrc={shop.srcImg} workSchedule={shop.duringWork}
                                          phoneNumber={"000 000 000 000"}/>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
