import React from 'react'
import { navigation } from "@data"

function Footer() {
    return (
        <footer>
            <div className="md:flex md:items-center md:justify-between border-t-2 border-black-100 pt-12">
                <div className="flex justify-center space-x-3 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-white bg-primary-100 rounded-full h-11 w-11 flex items-center justify-center">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-base text-gray-400">&copy; 2020 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer