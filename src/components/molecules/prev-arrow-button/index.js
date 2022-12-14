import React from 'react'
import { twMerge } from 'tailwind-merge';

function PrevArrowButton(props) {
    const { className, classNames, onClick } = props;
    return (
        <div
            className={twMerge(`xl:-ml-10 md:-ml-8 -ml-4 -mt-8 ${className} ${classNames}`)}
            onClick={onClick}
        >
            <svg className='lg:h-12 h-8 lg:w-12 w-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="46" y="46" width="46" height="46" rx="23" transform="rotate(-180 46 46)" fill="#F2F3F4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M31 23C31 23.5523 30.5523 24 30 24L16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22L30 22C30.5523 22 31 22.4477 31 23Z" fill="#253D4E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7071 30.7071C23.3166 31.0976 22.6834 31.0976 22.2929 30.7071L15.2929 23.7071C14.9024 23.3166 14.9024 22.6834 15.2929 22.2929L22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929C24.0976 15.6834 24.0976 16.3166 23.7071 16.7071L17.4142 23L23.7071 29.2929C24.0976 29.6834 24.0976 30.3166 23.7071 30.7071Z" fill="#253D4E" />
            </svg>
        </div>
    );
}

export default PrevArrowButton
