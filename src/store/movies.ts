import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {MovieItem, MoviesState} from "../types/movies";

const initialState: MoviesState = {
    list: [],
    loading: true,
    error: false,
    currentMovie: {
        id: 0,
        title: '',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '',
        poster_path: '',
        overview: '',
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0,
    }
}

export const moviesSlice = createSlice({
    name: 'MovieList',
    initialState,
    reducers: {
        loading: (state) => {
            state.loading = true;
            state.error = false;
        },
        loadedSuccess: (state, action: PayloadAction<MovieItem[]>) => {
            state.list = action.payload;
            state.error = false;
            state.loading = false;
        },
        loadedError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setCurrentMovie: (state, action: PayloadAction<MovieItem>) => {
            state.currentMovie = action.payload;
        },
        clearCurrentMovie: (state) => {
            state.currentMovie = initialState.currentMovie;
        }

    },
})

// Action creators are generated for each case reducer function
export const { loading, loadedError, loadedSuccess, setCurrentMovie, clearCurrentMovie } = moviesSlice.actions

export default moviesSlice.reducer
