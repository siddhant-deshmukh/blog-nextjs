"use client"

import React from 'react'

import blogsJSON from '@/data/blogs.json'
import Comments from './components/Comments';
import { useQuery } from 'react-query';
import Blog from './components/Blog';

export default function BlogPage({ params }: { params: { slug: string } }) {

  const { data: blogData, isLoading } = useQuery({
    queryKey: ['blog', params.slug],
    queryFn: async () => {
      const data = await getBlogData(params.slug)
      return data
    },
  })


  if (blogData) {
    return (
      <div className='mx-auto max-w-2xl w-full'>       
        <Blog blog={blogData}/>
        <div className='mt-10'>
          <Comments slug={params.slug} />
        </div>
      </div>
    )
  }
  return (
    <div>Not found</div>
  )
}

async function getBlogData(slug: string) {
  const blog = blogsJSON.find((blog) => blog.slug === slug)
  if (!blog) {
    return null
  }
  return blog
}