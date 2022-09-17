import React from 'react'
import { tabs } from '@data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from "react-slick";
import { Product } from 'components/molecules';
import { NextArrowButton, PrevArrowButton } from "components/molecules"

function CustomTabs(props) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
        centerPadding: "60px",
        initialSlide: 0,
        nextArrow: <NextArrowButton />,
        prevArrow: <PrevArrowButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            <TabList className="md:flex items-center justify-between lg:pb-8 pb-5">
                <h1 className={props.labelClass}>{props.title}</h1>
                <div>
                    {tabs.map((v, k) => {
                        return (
                            <Tab key={k}><span className='text-xs 2xl:text-base'>{v.value}</span></Tab>
                        )
                    })}
                </div>
            </TabList>

            {tabs?.map((i, j) => {
                return (
                    <TabPanel key={j} className="px-8 md:px-0">
                        <Slider {...settings} className="md:-mx-2">
                            {i?.products?.map((val, k) => {
                                return <Product {...val} key={k} />
                            })}
                        </Slider>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}

export default CustomTabs