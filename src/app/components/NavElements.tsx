"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const navigationItems = [
  { href: '/', label: "Home" },
  { href: '/blog', label: "Blog" },
  { href: '/about', label: "About" },
  { href: '/contact', label: "Contact" },
]

export default function NavElements() {
  const currentPath = usePathname()

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {
        navigationItems.map(({ href, label }) => {
          if (currentPath === href) {
            return (
              <li key={href}>
                <Link href={href} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">{label}</Link>
              </li>
            )
          }
          return (
            <li key={href}>
              <Link href={href} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{label}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}
