import React from 'react';
import {MovieItem} from "../../types/movies";

interface MoviesItemProps {
    movie: MovieItem
}

const MoviesItem = ({movie}: MoviesItemProps) => {
    const {title} = movie;
    return (
        <article>
            <h2>{title}</h2>
        </article>
    );
};

export default MoviesItem;
