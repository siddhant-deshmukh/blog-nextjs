import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { commentsApi } from "./commentsApi";
import commentReducer from "./commentSlice"
import commentSlice from "./commentSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, commentReducer);

export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     commentReducer,
//     [commentsApi.reducerPath]: commentsApi.reducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([commentsApi.middleware]),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



const rootReducer = combineReducers({
  user: commentSlice,
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store = configureStore({
      reducer: persistedReducer,
    })
    //@ts-ignore
    store.__persistor = persistStore(store)
    return store
  }
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore['dispatch']