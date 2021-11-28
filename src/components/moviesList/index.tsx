import React, {useEffect} from 'react';
import Spinner from "../spinner";
import Error from "../error";
import {useAppDispatch, useAppSelector} from "../../hooks";
import MoviesItems from "./MoviesItems";
import {getMovies} from "../../utils/api";


const MoviesList = () => {
    const {loading, error, list} = useAppSelector(state => state.moviesList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!list.length){
            dispatch(getMovies());
        }
    }, [loading, list, dispatch])

    return (
        <article className='movies_list'>
            {loading && <Spinner/>}
            {!loading && error && <Error/>}
            {!loading && !error && <MoviesItems list={list}/>}
        </article>
    );
};

export default MoviesList;
