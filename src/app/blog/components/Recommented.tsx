import { IBlog } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function Recommented({ blog }: { blog: IBlog }) {
  const date = new Date(blog.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <li key={blog.slug} className="border-bottom mb-3 mt-2 w-full">
      <Link href={`/blog/${blog.slug}`} className="p-0">
        <div className="py-5">
          <div className="flex justify-between items-start space-x-2.5">
            <div className="flex flex-col  justify-start">
              <div className="flex  items-start lg:items-center justify-start space-x-3 lg:space-x-1.5 pb-1.5">
                <img className="w-6 aspect-square rounded-full" src={blog.author.avatar} />
                <div className="flex w-full flex-col lg:flex-row lg:items-center">
                  <span className="text-sm lg:text-[11px] xl:text-xs text-gray-800 font-semibold">{blog.author.name}</span>
                  <span className="mx-1 dot w-1"></span>
                  {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
                  <span className="text-[11px] xl:text-xs ml-auto lg:ml-0 text-gray-700">{date}</span>
                </div>
              </div>
              <h3 className="text-sm xl:text-base line-clamp-2 font-semibold text-gray-950">{blog.title}</h3>
            </div>
            <img className="w-16 lg:w-20 aspect-square object-fill rounded-md" src={blog.thumbnail} />
          </div>
        </div>
      </Link>
    </li>
  )
}
