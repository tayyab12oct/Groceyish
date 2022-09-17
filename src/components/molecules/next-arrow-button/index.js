import React from 'react'
import { twMerge } from 'tailwind-merge';

function NextArrowButton(props) {
    const { className, classNames, onClick } = props;
    return (
        <div
            className={twMerge(`xl:-mr-4 lg:-mr-3 md:-mr-2 -mr-1 -mt-8 ${className} ${classNames}`)}
            onClick={onClick}
        >
            <svg className='lg:h-12 h-8 lg:w-12 w-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="23" fill="#F2F3F4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15 23C15 22.4477 15.4477 22 16 22H30C30.5523 22 31 22.4477 31 23C31 23.5523 30.5523 24 30 24H16C15.4477 24 15 23.5523 15 23Z" fill="#253D4E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929L30.7071 22.2929C31.0976 22.6834 31.0976 23.3166 30.7071 23.7071L23.7071 30.7071C23.3166 31.0976 22.6834 31.0976 22.2929 30.7071C21.9024 30.3166 21.9024 29.6834 22.2929 29.2929L28.5858 23L22.2929 16.7071C21.9024 16.3166 21.9024 15.6834 22.2929 15.2929Z" fill="#253D4E" />
            </svg>
        </div>
    );
}

export default NextArrowButton
