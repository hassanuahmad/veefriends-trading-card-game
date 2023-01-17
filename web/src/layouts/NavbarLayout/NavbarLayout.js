import { Fragment } from 'react'

import { Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth } from '@redwoodjs/auth'
// import { Link, navigate, routes } from '@redwoodjs/router'
import { Link, routes } from '@redwoodjs/router'

import logo from 'src/assets/logo.png'

const NavbarLayout = ({ children }) => {
  // TODO: fix the dropdown which is menu item and stuff, for now its temporary
  const { isAuthenticated, currentUser, logOut } = useAuth()

  // console.log('###', currentUser.sub)

  // const accountDropdown = [
  //   isAuthenticated && {
  //     dropdownName: 'Profile Page',
  //     action: routes.profile({ id: currentUser.sub }),
  //   },
  //   { dropdownName: 'Logout', action: logOut },
  // ]

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to={routes.home()}>
                <div className="flex items-end text-xl font-bold text-green-500">
                  <img className="h-8 w-auto sm:h-8" src={logo} alt="" /> -
                  Trading Cards
                </div>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                to={routes.deckBuilder()}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Deck Builder
              </Link>
              <Link
                to={routes.support()}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Support
              </Link>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {console.log('isAuth', isAuthenticated)}
              {isAuthenticated ? (
                <div>
                  {/* <span>Logged in as {currentUser?.email}</span>{' '}
                  <button
                    onClick={logOut}
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600"
                  >
                    Logout
                  </button> */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        {currentUser?.email}
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    {/* <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    > */}
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Link to={routes.profile({ id: currentUser.sub })}>
                          Profile Page
                        </Link>
                        <button onClick={logOut}>Logout</button>
                        {/* {accountDropdown.map((a, id) => (
                          <Menu.Item key={id} as={Fragment}>
                            {({ active }) => (
                              <button
                                key={id}
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                                onClick={a.action}
                              >
                                {a.dropdownName}
                              </button>
                            )}
                          </Menu.Item>
                        ))} */}
                      </div>
                    </Menu.Items>
                    {/* </Transition> */}
                  </Menu>
                </div>
              ) : (
                <div>
                  <Link
                    to={routes.signin()}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    to={routes.signup()}
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to={routes.support()}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Support
                  </Link>
                </div>
                {/* <div>
                  <Link
                    to={routes.signup()}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link
                      to={routes.login()}
                      className="text-green-500 hover:text-green-400"
                    >
                      Sign in
                    </Link>
                  </p>
                </div> */}
                {/* TEMP START */}
                <div className="">Account coming soon...</div>
                {/* TEMP END */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <main>{children}</main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* <div className="border-t px-6 py-12 md:px-14 lg:px-20 xl:px-52"> */}
        <div className="border-t py-6">
          VeeFriends Trading Cards - Made by{' '}
          <a
            href="https://twitter.com/hapaise"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            @hapaise
          </a>{' '}
          - Not affliated with VeeFriends
        </div>
      </div>
    </>
  )
}

export default NavbarLayout
