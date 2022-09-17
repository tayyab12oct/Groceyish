import React, { Component } from "react";
import Slider from "react-slick";
import { assets } from "constant/images";
import { Button, Input } from "components/atoms"
import Send from "assets/li_send.svg"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <Slider {...settings}>
                <div className="relative">
                    <img src={assets.hero_bg} alt="" className="absolute inset-0 pointer-events-none h-full w-full" />
                    <div className="relative bg-primary-200 h-full grid md:grid-cols-2 items-center lg:pl-16 2xl:pl-5">
                        <div className="2xl:p-26 xl:p-20 md:p-6 px-5 py-14">
                            <h1 className="2xl:text-6xl xl:text-5xl text-3xl text-black-200 font-bold">Don’t miss our daily amazing deals.</h1>
                            <p className="text-gray-800 2xl:text-xl xl:text-lg md:text-md md:py-7 pt-5 pb-7">Save up to 60% off on your first order</p>
                            <div className="flex lg:pt-6">
                                <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                                    <img src={Send} alt="" />
                                    <Input id="email" type="email" placeholder="Enter your email address" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-gray-100 placeholder-gray-100 bg-transparent" />
                                </div>
                                <Button value="Subscribe" className="2xl:text-base text-sm" />
                            </div>
                        </div>
                        <div className="md:flex justify-end xl:pl-32 hidden lg:-mb-8">
                            <img src={assets.hero} alt="" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={assets.hero_bg} alt="" className="absolute inset-0 pointer-events-none h-full w-full" />
                    <div className="relative bg-primary-200 h-full grid md:grid-cols-2 items-center lg:pl-16 2xl:pl-5">
                        <div className="2xl:p-26 xl:p-20 md:p-6 px-5 py-14">
                            <h1 className="2xl:text-6xl xl:text-5xl text-3xl text-black-200 font-bold">Don’t miss our daily amazing deals.</h1>
                            <p className="text-gray-800 2xl:text-xl xl:text-lg md:text-md md:py-7 pt-5 pb-7">Save up to 60% off on your first order</p>
                            <div className="flex lg:pt-6">
                                <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                                    <img src={Send} alt="" />
                                    <Input id="email" type="email" placeholder="Enter your email address" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-gray-100 placeholder-gray-100 bg-transparent" />
                                </div>
                                <Button value="Subscribe" className="2xl:text-base text-sm" />
                            </div>
                        </div>
                        <div className="md:flex justify-end xl:pl-32 hidden lg:-mb-8">
                            <img src={assets.hero} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}