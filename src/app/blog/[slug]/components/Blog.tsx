import { IBlog } from '@/types'
import React from 'react'

export default function Blog({ blog: blogData }: { blog: IBlog }) {
  const date = new Date(blogData.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <>
      <div className='flex flex-col space-y-7 my-7'>
        <img className='w-full h-auto max-h-[300px] object-cover object-center' src={blogData.thumbnail} />

        <h1 className='text-4xl font-extrabold text-gray-800'>
          {blogData.title}
        </h1>

        <div className='flex items-center border-y border-blue-200 py-1.5 space-x-5'>
          <img className='w-10 h-10 rounded-full' src={blogData.author.avatar} />
          <div>
            <h5 className='text-gray-700 font-semibold'>{blogData.author.name}</h5>
            <span className='text-sm text-gray-600'>{date}</span>
          </div>
        </div>
      </div>

      <div className='text-gray-700 whitespace-pre-line'>
        {blogData.content}
      </div>
    </>
  )
}
