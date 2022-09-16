import React from 'react'
import { assets } from 'constant/images'
import { Button } from "components/atoms"
import { twMerge } from "tailwind-merge"

function PromotionCard(props) {
    return (
        <div className="relative">
            <img src={assets.hero_bg} alt="" className={twMerge(`absolute inset-0 pointer-events-none h-full w-full`)} />
            <div className={twMerge(`relative bg-primary-200 h-full ${props.mainClass}`)}>
                <div className={twMerge(`flex md:grid md:grid-cols-2 ${props.className}`)}>
                    <div className={twMerge(`2xl:pt-8 2xl:pb-9 2xl:pl-14 lg:pl-9 pl-5 lg:py-6 py-5 pr-0 ${props.leftSideClass}`)}>
                        <p className={twMerge(`2xl:text-xs text-2xs 2xl:w-22 w-18 text-center text-white rounded-sm mb-3 px-0.5 2xl:px-2 2xl:py-1 py-0.5 ${props.badgeClass}`)}>{props.badge}</p>
                        <h1 className={twMerge(`2xl:text-[28px] lg:text-2xl text-lg whitespace-nowrap text-black-200 2xl:font-semibold font-medium ${props.titleClass}`)}>{props.title}</h1>
                        <p className={twMerge(`text-gray-800 max-w-xs lg:pr-4 2xl:text-lg lg:text-sm text-xs pt-3 2xl:leading-6 leading-5 2xl:pb-10 pb-6 ${props.descClass}`)}>{props.desc}</p>
                        <Button
                            className={twMerge(`2xl:text-base text-xs rounded-r-sm 2xl:py-3.5 xl:py-3 py-2.5 ${props.btnClass}`)}
                            value={<>
                                {props.btnValue}
                                <img src={assets.icon.arrowRight} className="w-5 ml-2" alt="" />
                            </>}
                        />
                        {props.children}
                    </div>
                    <div className="flex justify-end items-end pt-2">
                        <img src={props.src} alt="" className={props.imgClass} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionCard