import { IBlog } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blog }: { blog: IBlog }) {
  const date = new Date(blog.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <li key={blog.slug} className="border-bottom mb-3 mt-2 w-full">
      <Link href={`/blog/${blog.slug}`} className="p-0">
        <div className="px-2 py-5">
          <div className="flex  items-start justify-between space-x-5 w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <h3 className="text-sm xs:text-lg lg:text-xl line-clamp-2 font-bold text-gray-950">{blog.title}</h3>
                <p className="text-xs xs:text-sm lg:text-base line-clamp-3 xs:line-clamp-2 font-light text-gray-800 ">{blog.description}</p>
              </div>
              <div className="hidden lg:flex text-xs lg:text-sm items-center justify-start space-x-1.5 pt-4">
                <img className="w-6 h-6 rounded-full" src={blog.author.avatar} />
                <span className="text-gray-800 font-semibold">{blog.author.name}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
                <span className="text-gray-700">{date}</span>
              </div>
            </div>
            <div className="w-full flex-shrink-0 max-w-24 h-20 sm:max-w-32 sm:h-24 lg:max-w-44 lg:h-32">
              <img className="w-full h-full rounded-md col-span-3 overflow-hidden object-fill" src={blog.thumbnail} />
            </div>
          </div>
          <div className="flex lg:hidden text-[10px] xs:text-xs lg:text-sm items-center justify-start space-x-1.5 pt-4">
            <img className="w-6 h-6 rounded-full" src={blog.author.avatar} />
            <span className="text-gray-800 font-semibold">{blog.author.name}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
            <span className="text-gray-700">{date}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}
