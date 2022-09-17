import React from 'react'
import { navigation, address, links } from "@data"
import { assets } from 'constant/images'

function Footer() {
    return (
        <footer>
            <div className="flex flex-wrap justify-between 2xl:py-14 lg:pt-16 lg:pb-8 md:py-7 py-5 border-t-2 border-black-100">
                <div className="md:w-2/5 w-full pb-5 md:pb-0">
                    <img src={assets.logo} alt="Logo" className='2xl:h-14 h-11' />
                    <div className="2xl:space-y-6 space-y-5 py-4 2xl:mt-4 mt-2">
                        {address.map((v, k) => {
                            return (
                                <div key={k} className='flex items-center space-x-1'>
                                    <div><img src={v.src} alt="icons" className='2xl:w-4.5 w-4' /></div>
                                    <p className="text-black-200 text-xs 2xl:text-base"><span className="font-semibold pr-0.5">{v.title}:</span>{v.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {links.map((i, j) => {
                    return (
                        <div key={j}>
                            <p className="2xl:text-2xl xl:text-xl md:text-lg text-base text-black-200 2xl:font-semibold font-medium">{i.title}</p>
                            <ul className="2xl:space-y-3 space-y-1 py-4 2xl:mt-4 md:mt-2">
                                {i.list.map((v, k) => {
                                    return (
                                        <li key={k}>
                                            <a href="/" className='text-xs 2xl:text-base hover:underline hover:text-primary-100 transition-all'>{v.text}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="md:flex md:items-center md:justify-between border-t-2 border-black-100 2xl:py-9 md:py-7 py-5">
                <div className="flex justify-center space-x-3 md:order-3">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-white bg-primary-100 rounded-full 2xl:h-11 h-9 2xl:w-11 w-9 flex items-center justify-center hover:shadow-md transition-all">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="2xl:w-6 w-4 h-4 2xl:h-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="md:order-2 flex justify-center mt-4 md:mt-0">
                    <img src={assets.payment} alt="Payments" className='2xl:h-8 h-6' />
                </div>
                <div className="mt-4 md:order-1 md:mt-0">
                    <p className="text-center text-sm 2xl:text-base text-black-200">© 2022, All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer