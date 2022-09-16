import React from 'react'
import { twMerge } from 'tailwind-merge'

function Service(props) {
    return (
        <div className='flex items-center space-x-3 max-w-xs w-full'>
            <div className='pt-2 w-12 2xl:w-20 flex items-center justify-center'>
                <img src={props.src} className={twMerge(`2xl:w-12 w-8 ${props.imgClass}`)} alt="" />
            </div>
            <div className="">
                <h1 className={twMerge(`2xl:text-lg text-md text-black-200 2xl:font-semibold font-medium ${props.titleClass}`)}>{props.title}</h1>
                <p className={twMerge(`text-gray-100 2xl:text-base text-xs pt-1 2xl:leading-5 leading-5 ${props.descClass}`)}>{props.desc}</p>
            </div>
        </div>
    )
}

export default Service