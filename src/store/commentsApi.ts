import blogs from '@/data/blogs.json';
import { IComment } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),

  endpoints: (builder) => ({
    getComments: builder.query<IComment[] | undefined, string>({
      //@ts-ignore
      queryFn: async (slug: string) => {
        try {
          const comments = blogs.find((blog) => blog.slug === slug)?.comments as IComment[] | undefined
          return { data: comments }
        } catch (error) {
          return { error }
        }
      },
      transformResponse: (response: { data: IComment[] | undefined }) => { return (response.data) ? response.data : [] },
    }),
    addComment: builder.mutation({
      //@ts-ignore
      queryFn: async ({ slug, comment }: { slug: string, comment: IComment }) => {
        try {
          console.log("Here is queryFn mutation", slug, comment)
          // const comments = blogs.find((blog) => blog.slug === slug)?.comments as IComment[] | undefined
          return { data: comment }
        } catch (error) {
          return { error }
        }
      },
      async onQueryStarted({ comment, slug }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(commentsApi.util.updateQueryData('getComments', slug, (draft) => {
            if (draft) {
              draft.unshift(comment)
              // draft = [comment].concat(draft);
            }
          }));
        } catch (err) {
          console.error('Failed to add comment:', err);
        }
      },
    }),
  }),
});

export const { addComment, getComments } = commentsApi.endpoints;
export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi