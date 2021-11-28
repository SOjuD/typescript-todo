export enum genres {
    documentary = 'documentary',
    comedy = 'comedy',
    horror = 'horror',
    crime = 'crime',
}
export interface Filters {
    offset: number;
    limit: number;
    sortBy: string;
    sortOrder: 'desc' | 'asc';
    filter: Array<string>;
    search: string;
    searchBy: 'title' | 'genre';
}
