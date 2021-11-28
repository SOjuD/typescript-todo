import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "./movies";
import filtersReduces from "./filters";

const store = configureStore({
    reducer: {
        moviesList: moviesReducer,
        filters: filtersReduces
    },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
