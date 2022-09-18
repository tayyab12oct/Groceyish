import React, { Component } from "react";
import Slider from "react-slick";
import { assets } from "constant/images";
import { Button, Input } from "components/atoms"
import Send from "assets/li_send.svg"

export default class HeroSection extends Component {
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
                    <div className="relative bg-primary-200 h-full items-center">
                        <div className="md:absolute inset-0 flex items-center w-full">
                            <div className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 py-14 md:py-0 w-full">
                                <h1 className="2xl:text-6xl xl:text-5xl text-3xl text-black-200 font-bold lg:max-w-xl max-w-sm">Don’t miss our daily amazing deals.</h1>
                                <p className="text-gray-800 2xl:text-xl xl:text-lg md:text-md md:py-7 pt-5 pb-7">Save up to 60% off on your first order</p>
                                <div className="flex lg:pt-6">
                                    <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                                        <img src={Send} alt="" />
                                        <Input id="email" type="email" placeholder="Enter your email address" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-gray-100 placeholder-gray-100 bg-transparent" />
                                    </div>
                                    <Button value="Subscribe" className="2xl:text-base text-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-end xl:pl-32 hidden ml-auto w-1/2">
                            <img src={assets.hero} alt="" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={assets.hero_bg} alt="" className="absolute inset-0 pointer-events-none h-full w-full" />
                    <div className="relative bg-primary-200 h-full items-center">
                        <div className="md:absolute inset-0 flex items-center w-full">
                            <div className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 py-14 md:py-0 w-full">
                                <h1 className="2xl:text-6xl xl:text-5xl text-3xl text-black-200 font-bold lg:max-w-xl max-w-sm">Don’t miss our daily amazing deals.</h1>
                                <p className="text-gray-800 2xl:text-xl xl:text-lg md:text-md md:py-7 pt-5 pb-7">Save up to 60% off on your first order</p>
                                <div className="flex lg:pt-6">
                                    <div className="flex items-center bg-white pl-3.5 space-x-3 max-w-xs w-full">
                                        <img src={Send} alt="" />
                                        <Input id="email" type="email" placeholder="Enter your email address" mainClass="w-full" inputClass="2xl:text-sm xl:text-xs text-sm py-3.5 pl-0 text-gray-100 placeholder-gray-100 bg-transparent" />
                                    </div>
                                    <Button value="Subscribe" className="2xl:text-base text-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-end xl:pl-32 hidden ml-auto w-1/2">
                            <img src={assets.hero} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}