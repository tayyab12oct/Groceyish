import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { assets } from 'constant/images'
import { dropdownList } from '@data'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full items-center space-x-2 justify-center rounded-sm font-medium bg-primary-100 px-4 py-2 2xl:py-3.5 text-sm 2xl:text-md text-white shadow-sm focus:outline-none">
                    <img src={assets.icon.grid} alt="Grid" className='w-6' />
                    <span>Brows All Categories</span>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-primary-100 ring-opacity-50 focus:outline-none">
                    <div className="py-1.5 divide-y divide-gray-70">
                        {dropdownList.map((v, k) => (<Menu.Item key={k}>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-70 text-primary-100' : 'text-black-200',
                                        'block px-4 py-2.5 text-sm transition-all'
                                    )}
                                >
                                    {v.value}
                                </a>
                            )}
                        </Menu.Item>))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default Dropdown