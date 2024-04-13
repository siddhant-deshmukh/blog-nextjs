"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavElements from './NavElements'



export default function NavBar() {

  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <nav className="bg-white sticky top-0 border-gray-200 dark:bg-gray-900 border-bottom z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1.5">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12' x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="rgb(29 78 216)" d="M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26 C42,39.761,39.761,42,37,42z"></path><path fill="#fff" d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"></path>
          </svg>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </Link>
        <button onClick={() => { setToggle(prev => !prev) }} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${toggle?'block':'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <NavElements />
        </div>
      </div>
    </nav>

  )
}
