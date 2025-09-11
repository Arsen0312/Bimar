import React from 'react';
import Image from "next/image";

type TProps = {
    name: string,
    duringWork: string
    onClick: () => void
}

const CurdStoreForMap = (props: TProps) => {
    const { name, duringWork } = props

    return (
        <div className="border border-[#E0E0E0] rounded-[8px] p-1 flex flex-col">
            <div className="flex items-center gap-2">
                <Image alt="locationIcon" src="assets/location.svg" width={24} height={24} />
                <span className="text-[14px] font-normal text-[#202020] leading-[22px]">{name}</span>
            </div>
            <hr className="border-[#E0E0E0] my-2"/>
            <div className="flex items-center gap-2">
                <Image alt="timeIcon" src="assets/time.svg" width={24} height={24} />
                <span className="text-[14px] font-normal text-[#202020] leading-[22px]">{duringWork}</span>
            </div>
        </div>
    );
};

export default CurdStoreForMap;