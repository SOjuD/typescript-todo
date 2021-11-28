import axios, {AxiosResponse} from "axios";

const baseUrl = 'http://localhost:4000/movies'


export const getRequest = <T>(urlParams: string | number): Promise<T> =>
    axios.get(`${baseUrl}/${urlParams}`)
        .then((data: AxiosResponse<T>) => data.data)
        .catch(e => {throw e})
