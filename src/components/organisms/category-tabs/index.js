import { tabs } from '@data';
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from "react-slick";
import { Category } from 'components/molecules';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`xl:-mr-4 lg:-mr-3 md:-mr-2 -mr-1 -mt-8 ${className}`}
            onClick={onClick}
        >
            <svg className='md:h-12 h-8 md:w-12 w-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="23" fill="#F2F3F4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15 23C15 22.4477 15.4477 22 16 22H30C30.5523 22 31 22.4477 31 23C31 23.5523 30.5523 24 30 24H16C15.4477 24 15 23.5523 15 23Z" fill="#253D4E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929L30.7071 22.2929C31.0976 22.6834 31.0976 23.3166 30.7071 23.7071L23.7071 30.7071C23.3166 31.0976 22.6834 31.0976 22.2929 30.7071C21.9024 30.3166 21.9024 29.6834 22.2929 29.2929L28.5858 23L22.2929 16.7071C21.9024 16.3166 21.9024 15.6834 22.2929 15.2929Z" fill="#253D4E" />
            </svg>

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`xl:-ml-10 md:-ml-8 -ml-4 -mt-8 ${className}`}
            onClick={onClick}
        >
            <svg className='md:h-12 h-8 md:w-12 w-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="46" y="46" width="46" height="46" rx="23" transform="rotate(-180 46 46)" fill="#F2F3F4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M31 23C31 23.5523 30.5523 24 30 24L16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22L30 22C30.5523 22 31 22.4477 31 23Z" fill="#253D4E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7071 30.7071C23.3166 31.0976 22.6834 31.0976 22.2929 30.7071L15.2929 23.7071C14.9024 23.3166 14.9024 22.6834 15.2929 22.2929L22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929C24.0976 15.6834 24.0976 16.3166 23.7071 16.7071L17.4142 23L23.7071 29.2929C24.0976 29.6834 24.0976 30.3166 23.7071 30.7071Z" fill="#253D4E" />
            </svg>
        </div>
    );
}
function CustomTabs(props) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        swipeToSlide: true,
        centerPadding: "60px",
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
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
                            {i?.category?.map((val, k) => {
                                return <Category {...val} key={k} />
                            })}
                        </Slider>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}

export default CustomTabs