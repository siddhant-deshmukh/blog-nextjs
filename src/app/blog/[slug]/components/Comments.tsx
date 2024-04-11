"use client"

import React, { useEffect, useState } from 'react'

import { addComment, getCommets } from '@/store/commentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { commentsApi } from '@/store/commentsApi'

export default function Comments({ slug }: { slug: string }) {

  // const [comments, setComments] = useState<IComment[]>([])
  const { data: comments, isLoading } = commentsApi.useGetCommentsQuery(slug)
  const [addComment, { isLoading: isAddingComment }] = commentsApi.useAddCommentMutation()

  // const comments = useSelector((state: RootState) => state.commentReducer.list);
  // const dispatch = useDispatch<AppDispatch>();

  const [newComment, setNewComment] = useState<string>("")

  useEffect(() => {
    // dispatch(getCommets(slug))
  }, [])

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      <h3 className='text-2xl font-semibold text-gray-900'>Comments</h3>
      <div className='my-2.5 flex flex-row space-x-5 items-end'>
        <textarea
          value={newComment}
          onChange={(e) => { setNewComment(e.target.value) }}
          className='p-2 rounded-md outline-none border border-gray-300 w-full' placeholder='write  comment' />
        <button
          onClick={() => {
            addComment({
              slug,
              comment: {
                author: {
                  avatar: "https://avatars.githubusercontent.com/u/99490001",
                  name: "Teri Mueller"
                },
                content: newComment,
                uploadedAt: Date.now()
              }
            })
            setNewComment("")
          }}
          className='ml-auto bg-gray-800 flex-shrink-0 text-sm font-bold px-2.5 py-1.5 rounded-lg text-white'>Add</button>
      </div>
      <div className='flex flex-col'>
        {
          comments && comments.map((comment, index) => {
            const date = new Date(comment.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            return (
              <div key={index} className='flex space-x-5 my-2.5 border-b py-2.5'>
                <div className='flex-shrink-0 '>
                  <img src={comment.author.avatar} className='w-10 h-10 rounded-full' />
                </div>
                <div>
                  <div className='flex space-x-2.5 items-center'>
                    <div className='font-semibold text-gray-900 text-base'>{comment.author.name}</div>
                    <span className='w-1.5 h-1.5 bg-gray-300 rounded-full'></span>
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

// function getComments(slug: string) {
//   const blog = blogsJSON.find((blog) => blog.slug === slug)
//   if (blog?.comments) {
//     return blog.comments as IComment[]
//   }
//   return []
// }