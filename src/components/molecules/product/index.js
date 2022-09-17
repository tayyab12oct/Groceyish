import React from 'react'
import { twMerge } from 'tailwind-merge'

function Product(props) {
    return (
        <div className={twMerge(`mx-2 rounded-sm p-3 pb-4 flex flex-col items-center ${props.className}`)}>
            <div className="flex items-center justify-center h-20 w-24 2xl:h-28 2xl:w-28">
                <img src={props.src} alt="" className={twMerge(`w-20 2xl:w-28 ${props.imgClass}`)} />
            </div>
            <h1 className={twMerge(`2xl:text-lg text-md capitalize text-black-200 2xl:font-semibold font-medium pt-3 ${props.titleClass}`)}>{props.title}</h1>
            <p className={twMerge(`text-gray-100 2xl:text-base xl:text-xs text-xs 2xl:leading-5 leading-5 ${props.descClass}`)}>{props.items} Items</p>
        </div>
    )
}

export default Product