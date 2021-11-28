import {MoviesApiResponse} from "../types/api";
import {Filters} from "../types/filters";
import {AppDispatch, RootState} from "../store";
import {loadedError, loadedSuccess, loading, setCurrentMovie} from "../store/movies";
import {MovieItem} from "../types/movies";
import {getRequest} from "../api";

export const getRequestParams = (filters: Filters):string => {
    let strParams = '';
    (Object.keys(filters) as Array<keyof Filters>).forEach(filterName => {
        const separator: string = strParams.length ? '&' : '?';
        strParams += `${separator}${filterName}=${filters[filterName]}`;
    })
    return strParams;
}

export const getMovies = () => async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try{
        dispatch(loading());
        const params = getRequestParams(getState().filters);
        const {data} = await getRequest<MoviesApiResponse>(params) ;

        dispatch(loadedSuccess(data))
    }catch {
        dispatch(loadedError())
    }

}

export const getMovie = (id: number) => async (dispatch: AppDispatch): Promise<void> => {
    try{
        dispatch(loading());
        const movie = await getRequest<MovieItem>(id) ;

        dispatch(setCurrentMovie(movie))
    }catch {
        dispatch(loadedError())
    }

}
