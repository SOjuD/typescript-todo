import {MovieItem} from "./movies";

export interface MoviesApiResponse {
    data: Array<MovieItem>
    limit: number;
    offset: number;
    totalAmount: number;
}
