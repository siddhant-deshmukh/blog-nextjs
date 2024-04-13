"use client"

import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import blogsJSON from '@/data/blogs.json'
import { IComment } from '@/types'

export default function Comments({ slug }: { slug: string }) {

  const queryClient = useQueryClient()
  const queryKey = `comments-${slug}`

  const { data: comments } = useQuery({
    queryKey,
    queryFn: async () => {
      const data = await getComments(slug)
      return data
    },
  })
  const [newComment, setNewComment] = useState<string>("")
  const { mutate: addComment } = useMutation(async (comment: IComment) => { return comment }, {
    onSuccess: (newComment: IComment) => {
      queryClient.setQueryData(queryKey, (oldComments: IComment[] | undefined) => {
        if (!oldComments) return [newComment];
        else return [newComment, ...oldComments];
      });
    },
  });

  return (
    <div>
      <div className='text-2xl font-semibold text-gray-900'>Comments</div>
      <div className='my-2.5 flex flex-row space-x-5 items-end'>
        <textarea
          value={newComment}
          onChange={(e) => { setNewComment(e.target.value) }}
          className='p-2 rounded-md outline-none border border-gray-300 w-full' placeholder='write  comment' />
        <button
          onClick={() => {
            addComment({
              author: {
                avatar: "https://avatars.githubusercontent.com/u/99490001",
                name: "Teri Mueller"
              },
              content: newComment,
              uploadedAt: Date.now()
            })
            setNewComment("")
          }}
          className='ml-auto mb-0 btn-normal'>Add</button>
      </div>
      <div className='flex flex-col'>
        {
          comments && comments.map((comment, index) => {
            const date = new Date(comment.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            return (
              <div key={index} className='flex space-x-5 my-2.5 border-bottompy-2.5'>
                <div className='flex-shrink-0 '>
                  <img src={comment.author.avatar} className='w-10 h-10 rounded-full' />
                </div>
                <div>
                  <div className='flex space-x-2.5 items-center'>
                    <div className='font-semibold text-gray-900 text-base'>{comment.author.name}</div>
                    <span className='dot'></span>
                    <div className='font-medium text-gray-500 text-sm'>{date}</div>
                  </div>
                  <p className='text-base text-gray-700  py-1.5'>
                    {comment.content}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


async function getComments(slug: string) {
  const blog = blogsJSON.find((blog) => blog.slug === slug)
  if (blog?.comments) {
    return blog.comments as IComment[]
  }
  return []
}