import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import logo from "../images/logo.svg"
import currencies from "../data/currencies"
import SelectCurrency from "./select-currency"
import { CurrencyConsumer } from "../contexts/currency"

const navigation = [
  { name: 'Meet your meat', href: 'https://watchdominion.org' },
  { name: 'Our farms', href: 'https://www.elwooddogmeat.com' },
]

export default function NavBar() {
  return (
    <Popover>
      <div className="relative py-6 px-4 sm:px-6 lg:px-8 lg:pr-0 lg:max-w-[calc(100vw-2rem)] lg:w-[120%]">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" className="inline-block overflow-hidden rounded-md mr-2">
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                />
              </a>
              <a href="/" className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl uppercase">
                Puppy Box
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-row items-center md:ml-10 md:space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))}
            <CurrencyConsumer>
              {({ state, dispatch }) => (
                <SelectCurrency
                  selectedCurrency={state.currency}
                  onClick={(currency) => dispatch({ type: "select", currency })}
                  />
              )}
            </CurrencyConsumer>
            <a
              href="/create-your-box"
              className="flex-inline items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-md md:px-3"
            >
              Create your box
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={logo}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="p-3">
              <div className="px-2 text-gray-400">
                Currencies:
              </div>
              <CurrencyConsumer>
                {({ state, dispatch }) => (
                  <SelectCurrency
                    selectedCurrency={state.currency}
                    onClick={(currency) => dispatch({ type: "select", currency })}
                    variant="inline"
                    />
                )}
              </CurrencyConsumer>
            </div>
            <div className="p-2">
              <a
                href="/create-your-box"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              >
                Create your box
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

