"use client";
import { store } from '@/store/store';
import React from 'react'
import { Provider } from 'react-redux';
import Comments from './Comments';

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default function CommentsSection({ slug }: { slug: string }) {
  return (
    <ReduxProvider>
      <Comments slug={slug} />
    </ReduxProvider>
  )
}

