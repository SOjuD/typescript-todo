export interface MovieItem {
    "id": number;
    "title": string;
    "tagline": string;
    "vote_average": number;
    "vote_count": number;
    "release_date": string;
    "poster_path": string;
    "overview": string;
    "budget": number;
    "revenue": number;
    "genres": Array<string>;
    "runtime": number;
}

export interface MoviesState {
    list: Array<MovieItem>;
    loading: boolean;
    error: boolean,
    currentMovie: MovieItem
}
