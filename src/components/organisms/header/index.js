import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { assets } from 'constant/images'
import { dropdownList, routes, user, userNavigation } from '@data'
import { Dropdown } from 'components/molecules'
import { CgMenuRightAlt } from 'react-icons/cg'
import { GrFormClose } from 'react-icons/gr';
import { FiSearch, FiChevronDown, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Button, Input } from 'components/atoms'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    return (
        <Disclosure as="header" className="bg-gray-50 backdrop-blur-md w-full border-b border-gray-70 sticky inset-x-0 top-0 z-50">
            {({ open }) => (
                <>
                    <div className="divide-y lg:divide-gray-70 w-full">
                        <div className="relative py-4.5 2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 w-full">
                            <div className="flex items-center justify-between space-x-8 md:space-x-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <img src={assets.logo} alt="Logo" className='2xl:h-10 h-9' />
                                </div>
                                <div className="2xl:max-w-2xl xl:max-w-lg lg:max-w-md md:max-w-xs max-w-sm w-full hidden md:block">
                                    <div className="relative bg-gray-500 flex items-center rounded-sm overflow-hidden">
                                        <select
                                            id="location"
                                            name="location"
                                            className="py-2 pl-3 md:pr-5 2xl:text-sm xl:text-xs text-xs focus:outline-none bg-transparent cursor-pointer mr-3 text-black-200 font-medium"
                                            defaultValue="All Category"
                                        >
                                            {dropdownList.map((v, k) => (
                                                <option key={k}>{v.value}</option>
                                            ))}
                                        </select>
                                        <Input placeholder="Search for items..." id="search" type="text" inputClass="bg-transparent placeholder-gray-100 2xl:text-sm xl:text-xs text-xs border-0 !border-l-1 border-gray-100 py-0 rounded-none" mainClass="w-full flex items-center" />
                                        <Button icon={<FiSearch className='2xl:text-xl xl:text-base' />} className="2xl:py-2.5 xl:py-2 px-3 2xl:px-3.5" />
                                    </div>
                                </div>
                                <div className="md:relative md:z-10 md:flex md:items-center 2xl:space-x-8 xl:space-x-2 lg:space-x-0 md:space-x-5 space-x-3">
                                    <a
                                        href="/"
                                        className="inline-flex items-center md:text-sm text-xs xl:text-xs transition-all text-black-200 hover:text-primary-100"
                                    >
                                        <FiHeart className='2xl:text-xl md:text-lg text-md md:mr-1.5 mr-1' />
                                        <span>Wishlist</span>
                                    </a>
                                    <a
                                        href="/"
                                        className="inline-flex xl:w-40 lg:w-34 items-center justify-center group space-x-0.5 md:text-sm text-xs xl:text-xs transition-all text-black-200 hover:text-primary-100"
                                    >
                                        <span className="relative inline-block">
                                            <FiShoppingCart className='2xl:text-xl text-base mr-1.5' />
                                            <span className="absolute top-0 right-0 h-2.5 w-2.5 ring-1 ring-white text-tinny flex items-center justify-center text-white rounded-full bg-primary-100" >1</span>
                                        </span>
                                        <div>
                                            <p>My cart</p>
                                            <p className='text-primary-100'>$21</p>
                                        </div>
                                        <FiChevronDown className="md:text-lg text-base font-semibold" />
                                    </a>
                                    {/* Profile dropdown */}
                                    <Dropdown buttonClass="hidden" menuClass="right-0 w-full" mainClass="hidden lg:block" dropdownMap={userNavigation}>
                                        <Menu.Button className="flex items-center space-x-1.5 focus:outline-none">
                                            <img className="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full" src={user.imageUrl} alt="" />
                                            <span className="text-sm xl:text-2xs 2xl:text-md text-black-200 font-semibold">{user.name}</span>
                                            <FiChevronDown className="text-lg font-semibold text-black-200" />
                                        </Menu.Button>
                                    </Dropdown>
                                    <Menu as="div" className="relative hidden ml-4 flex-shrink-0">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block py-2 px-4 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <div>
                            <nav className="flex items-center justify-between py-2 2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 w-full">
                                <Dropdown menuClass="left-0 w-full" dropdownMap={dropdownList} />
                                <div className='hidden lg:flex items-center xl:space-x-14 space-x-7'>
                                    {routes.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-primary-100' : 'text-black-200 hover:text-primary-100',
                                                'inline-flex items-center text-sm xl:text-xs 2xl:text-base font-medium transition-all'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <item.icon className='2xl:text-xl text-lg mr-1' />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className='hidden lg:flex items-center space-x-1'>
                                    <div><img src={assets.icon.phone} alt="call" className='w-4' /></div>
                                    <p className="text-black-200 text-xs 2xl:text-sm flex items-center"><span className="font-semibold pr-1 2xl:text-lg text-sm text-primary-100">1233-7777</span>24/7 support center</p>
                                </div>
                                <div className="relative z-10 flex items-center lg:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-sm p-2 text-gray-800 focus:outline-none bg-gray-70">
                                        {open ? (
                                            <GrFormClose className="block h-6 w-6 text-gray-800" aria-hidden="true" />
                                        ) : (
                                            <CgMenuRightAlt className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden px-4 py-2">
                        <div className="relative bg-gray-500 flex items-center rounded-sm overflow-hidden w-full">
                            <select
                                id="location"
                                name="location"
                                className="py-2 pl-3 pr-5 text-xs focus:outline-none bg-transparent cursor-pointer mr-3 text-black-200 font-medium"
                                defaultValue="All Category"
                            >
                                {dropdownList.map((v, k) => (
                                    <option key={k}>{v.value}</option>
                                ))}
                            </select>
                            <Input placeholder="Search for items..." id="search" type="text" inputClass="bg-transparent placeholder-gray-100 text-xs border-l border-gray-100 py-0" mainClass="w-full flex items-center py-3" />
                            <Button icon={<FiSearch className='text-base' />} className="py-3 px-3" />
                        </div>
                        <div className="flex flex-col space-y-4 pt-4 pb-4">
                            {routes.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-primary-100' : 'text-black-200 hover:text-primary-100',
                                        'inline-flex items-center text-sm xl:text-xs 2xl:text-base font-medium transition-all'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <item.icon className='2xl:text-xl text-lg mr-1' />
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-70 pt-4 pb-3">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-black-200">{user.name}</div>
                                    <div className="text-xs font-medium text-black-200">{user.email}</div>
                                </div>
                            </div>
                            <div className="mt-3 space-y-1">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.value}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md py-1 text-sm font-medium text-black-200 hover:text-primary-100"
                                    >
                                        {item.value}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
export default Header