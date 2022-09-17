import React from 'react'
import { dailySells } from '@data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from "react-slick";
import { Product, Timer } from 'components/molecules';
import { NextArrowButton, PrevArrowButton } from "components/molecules"

function CustomTabs(props) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        initialSlide: 0,
        nextArrow: <NextArrowButton class="absolute -top-9 md:-top-11 md:-mr-0 lg:-top-20 lg:right-0 md:right-9 right-4 xl:right-12" />,
        prevArrow: <PrevArrowButton class="absolute -top-9 md:-top-11 lg:-top-20 left-0 ml-[80%] sm:ml-[89%] md:ml-[85%] xl:ml-[90%] 2xl:ml-[92%]" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Tabs>
            <TabList className="flex flex-wrap md:flex-nowrap md:items-center justify-between sm:justify-start md:space-x-4 lg:pb-14 pb-5">
                <h1 className="text-black-200 lg:text-2.5xl md:text-2xl text-xl font-semibold tracking-wide pt-1.5 md:pt-0">{props.title}</h1>
                <div className='pr-4'>
                    {dailySells.map((v, k) => {
                        return (
                            <Tab key={k}><span className='text-xs 2xl:text-base px-1'>{v.value}</span></Tab>
                        )
                    })}
                </div>
                <div className='mt-5 md:mt-0 w-full md:w-auto flex'><Timer /></div>
            </TabList>

            {dailySells?.map((i, j) => {
                return (
                    <TabPanel key={j} className="">
                        <Slider {...settings} className="md:-mx-2">
                            {i?.products?.map((val, k) => {
                                return <Product {...val} key={k} className="mx-0 sm:mx-2" />
                            })}
                        </Slider>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}

export default CustomTabs