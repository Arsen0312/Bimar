"use client";

import dynamic from 'next/dynamic';
import {TShops} from "@/app/page";

// Компонент с картой будет загружен только на стороне клиента
const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Загрузка карты...</div>,
});

type TProps = {
    shops: TShops[]
}

export default function BimarMap(props: TProps) {
  return <MapWithNoSSR shops={props.shops}/>;
}
