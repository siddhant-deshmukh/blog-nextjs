"use client";
import { persistor, store } from '@/store/store';
import React from 'react'
import { Provider } from 'react-redux';
import Comments from './Comments';
import { PersistGate } from 'redux-persist/integration/react';

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default function CommentsSection({ slug }: { slug: string }) {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Comments slug={slug} />
      </PersistGate>
    </ReduxProvider>
  )
}

