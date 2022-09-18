import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { assets } from 'constant/images'
import { dropdownList, routes, user, userNavigation } from '@data'
import { Dropdown } from 'components/molecules'
import { CgMenuRightAlt } from 'react-icons/cg'
import { GrFormClose } from 'react-icons/gr';
import { FiChevronDown } from 'react-icons/fi';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    return (
        <Disclosure as="header" className="bg-gray-50 backdrop-blur-md w-full border-b border-gray-70 sticky inset-x-0 top-0 z-50">
            {({ open }) => (
                <>
                    <div className="divide-y lg:divide-gray-70 2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 w-full">
                        <div className="relative flex h-16 justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <img src={assets.logo} alt="Logo" className='2xl:h-10 h-9' />
                            </div>
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                {/* Profile dropdown */}
                                <Dropdown buttonClass="hidden" menuClass="right-0 w-full" dropdownMap={userNavigation}>
                                    <Menu.Button className="flex items-center space-x-1.5 focus:outline-none">
                                        <img className="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full" src={user.imageUrl} alt="" />
                                        <span className="text-sm 2xl:text-md text-black-200 font-semibold">{user.name}</span>
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
                        <nav className="flex items-center justify-between py-2">
                            <Dropdown menuClass="left-0 w-full" dropdownMap={dropdownList} />
                            <div className='hidden lg:flex items-center space-x-14'>
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

                    <Disclosure.Panel as="nav" className="lg:hidden">
                        <div className="flex flex-col space-y-4 px-5 pt-2 pb-4">
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
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-black-200">{user.name}</div>
                                    <div className="text-xs font-medium text-black-200">{user.email}</div>
                                </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md py-1 px-3 text-sm font-medium text-black-200 hover:text-primary-100"
                                    >
                                        {item.name}
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