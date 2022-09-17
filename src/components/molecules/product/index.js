import { Button } from 'components/atoms'
import { assets } from 'constant/images'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Product(props) {
    return (
        <div className={twMerge(`mx-2 border border-gray-100 border-opacity-25 rounded-sm flex flex-col items-center ${props.className}`)}>
            <div className={twMerge(`flex items-center justify-center relative ${props.imgMainClass}`)}>
                <p className={twMerge(`2xl:text-xs text-2xs 2xl:w-22 w-18 absolute top-0 left-0 text-center text-white rounded-sm px-0.5 2xl:px-2 2xl:py-1.5 py-1 ${props.badgeClass}`)}>{props.badge}</p>
                <img src={props.src} alt="" className={twMerge(`max-h-34 ${props.imgClass}`)} />
            </div>
            <div className='w-full p-2'>
                <p className={twMerge(`2xl:text-xs text-2xs text-gray-100 font-light`)}>{props.category}</p>
                <h1 className={twMerge(`2xl:text-base text-sm capitalize text-black-200 2xl:font-semibold font-medium 2xl:pt-0.5 ${props.titleClass}`)}>{props.title}</h1>
                <div class={twMerge(`flex items-center pt-4 text-2xs text-gray-100 ${props.ratingClass}`)}>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className='pl-1'>(4)</span>
                </div>
                <p className={twMerge(`2xl:text-xs text-2xs text-gray-100 font-light ${props.nameClass}`)}>By <span className="text-primary-100">{props.name}</span></p>
                <div className="flex flex-wrap justify-between items-center pt-2.5">
                    <p className={twMerge(`text-primary-100 flex items-center space-x-2 text-sm 2xl:text-lg ${props.priceClass}`)}><span className='font-semibold'>${props.price}</span> <span className="2xl:text-sm text-xs text-gray-100 font-normal line-through">${props.oldPrice}</span> </p>
                    {props.children}
                    <Button className={twMerge(`text-2xs bg-primary-50 hover:shadow-sm text-primary-100 transition-all py-1.5 px-5 rounded ${props.btnClass}`)} value={props.btnValue}
                        icon={
                            <img src={props.icon} alt="cart" className='w-3 mr-1' />
                        } />
                </div>
            </div>
        </div>
    )
}
Product.defaultProps = {
    icon: assets.icon.cart
}
export default Product