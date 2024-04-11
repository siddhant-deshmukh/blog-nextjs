import { createSlice } from "@reduxjs/toolkit";

import { IComment } from "@/types";
import blogsJSON from "@/data/blogs.json"

type CommentState = {
  list: IComment[];
  slug: string | undefined;
};

const initialState: CommentState = {
  list: [],
  slug: undefined,
};

export const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action: { payload: IComment }) => {
      state.list = [action.payload].concat(state.list);
    },
    getCommets: (state, action: { payload: string }) => {
      const slug = action.payload
      state.slug = slug

      const blog = blogsJSON.find((blog) => blog.slug === slug)
      if (blog?.comments) {
        state.list = blog.comments
      } else {
        state.list = []
        state.slug = undefined
      }
    },
  },
});

export const { addComment, getCommets } = comment.actions;
export default comment.reducer;