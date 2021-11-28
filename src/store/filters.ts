import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Filters} from "../types/filters";

const initialState: Filters = {
    offset: 0,
    limit: 30,
    sortBy: 'date',
    sortOrder: 'desc',
    filter: [],
    search: '',
    searchBy: 'title',
}

export const moviesSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Filters>) => {
            state = {...state, ...action.payload}
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFilters } = moviesSlice.actions

export default moviesSlice.reducer
