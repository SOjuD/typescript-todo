import React from 'react';
import {MovieItem} from "../../types/movies";
import MoviesItem from "./MoviesItem";
interface MoviesItemsProps {
    list: MovieItem[]
}
const MoviesItems = ({list}: MoviesItemsProps) => {
    return (
        <section>
            {list.map(movie => <MoviesItem key={movie.id} movie={movie}/>)}
        </section>
    );
};

export default MoviesItems;
