import { Button, Input } from 'components/atoms'
import { assets } from 'constant/images'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Membership(props) {
    return (
        <div className="relative w-full">
            <img src={assets.hero_bg} alt="" className={twMerge(`absolute inset-0 pointer-events-none h-full w-full`)} />
            <div className={twMerge(`relative bg-secondary-200 py-7 px-3 h-full`)}>
                <h1 className={twMerge(`2xl:text-3xl lg:text-2.5xl text-2xl whitespace-nowrap text-black-200 font-bold text-center`)}>10% OFF</h1>
                <p className={twMerge(`text-black-200 2xl:text-lg lg:text-sm text-xs pt-3 2xl:leading-6 leading-5 2xl:pb-2 pb-5 text-center`)}>For new member sign up at the first time</p>
                <div className="py-1">
                    <p className="text-black-200 md:text-xs text-2xs pb-1">Email address<span className='text-red-300'>*</span></p>
                    <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                        <img src={assets.icon.email} className="w-4" alt="" />
                        <Input id="email" type="email" placeholder="Enter your email address" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-black-200 placeholder-gray-100 bg-transparent" />
                    </div>
                </div>
                <div className="py-1">
                    <p className="text-black-200 md:text-xs text-2xs pb-1">Password<span className='text-red-300'>*</span></p>
                    <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                        <img src={assets.icon.key} className="w-4" alt="" />
                        <Input id="password" type="password" placeholder="Maximum 8 characters" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-black-200 placeholder-gray-100 bg-transparent" />
                    </div>
                </div>
                <Button
                    className={twMerge(`mt-8 2xl:text-base text-sm w-full rounded-r-sm 2xl:py-3 py-2.5 ${props.btnClass}`)}
                    value="Register Now"
                />
            </div>
        </div>
    )
}

export default Membership
