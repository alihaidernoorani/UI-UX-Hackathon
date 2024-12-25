import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface PoductCardProps {
    img: StaticImageData;
    name: string;
}

const PopularProductCard = ({img, name}: PoductCardProps) => {
    return (
        <div className='space-y-4'>
            <Image src={img} alt=''/>
            <h3>{name}</h3>
            <span>$99</span>
        </div>
    )
}

export default PopularProductCard