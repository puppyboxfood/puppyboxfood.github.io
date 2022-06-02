import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo.svg'
import NavBar from './nav-bar'

export default function Hero({image, header, secondHeader, subtitle, cta, withNav}) {
  return (
    <div className="relative bg-white overflow-hidden h-full">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full h-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {withNav ? <NavBar /> : null}

          <main style={{ backgroundImage: `url('${image}')` }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-right lg:!bg-none h-full flex items-center justify-center h-[calc(100%-88px)]">
            <div className="text-left h-full flex flex-col justify-between sm:justify-center md:pt-0 pt-20">
              <div>
                <h1 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`}>
                  <span className="block xl:inline">{header}</span>{' '}
                  {secondHeader && (<span className="block text-red-600 xl:inline">{secondHeader}</span>)}
                </h1>
                {subtitle && (
                  <p className="mt-3 text-base font-medium text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    <span className="bg-white">
                      {subtitle}
                    </span>
                  </p>
                )}
              </div>
              {cta && (
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start pb-20">
                  <div className="rounded-md shadow">
                    <a
                      href="/create-your-box"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      {cta}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={image}
          alt=""
        />
      </div>
    </div>
  )
}
