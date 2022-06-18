import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo.svg'
import NavBar from './nav-bar'

export default function Hero({image, header, secondHeader, subtitle, cta, ctaUrl}) {
  return (
    <div className="relative bg-white overflow-hidden h-[150vh] lg:h-full flex flex-col-reverse lg:flex-row">
      <div className="max-w-7xl mx-auto h-full flex-1">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full h-[75vh] lg:h-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <svg
            className="block lg:hidden absolute top-[-5.9rem] left-0 inset-x-0 h-24 w-full text-white"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,50 0,100 100,100 100,0" />
          </svg>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-right lg:!bg-none h-full flex">
            <div className="text-left h-full flex flex-col justify-around md:pt-0">
              <h1 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`}>
                <span className="inline">{header}</span>{' '}
                {secondHeader && (<span className="text-red-600 inline">{secondHeader}</span>)}
              </h1>
              {subtitle && (
                <div className="text-lg text-gray-500 sm:text-lg md:mt-5 md:text-2xl leading-relaxed">
                    {subtitle}
                </div>
              )}
              {cta && (
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                  <div className="rounded-md">
                    <a
                      href={ctaUrl || "/create-your-box"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base uppercase font-medium rounded-md text-red-500 ring-2 ring-red-500 hover:ring-red-600 md:py-4 md:text-lg md:px-10"
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
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 block">
        <img
          className="h-[75vh] w-full object-cover lg:w-full lg:h-full"
          src={image}
          alt=""
        />
      </div>
    </div>
  )
}
