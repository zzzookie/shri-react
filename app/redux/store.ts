import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { cinemasApi, movieApi, reviewsApi } from "./api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    movieApi.middleware,
    cinemasApi.middleware,
    reviewsApi.middleware,
  ])
});
