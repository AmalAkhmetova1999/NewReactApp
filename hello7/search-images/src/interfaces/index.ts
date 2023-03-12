export interface ResponseAPI {
    results: Result[];
}

export interface Result {
    id: string;
    description: null | string;
    alt_description: null | string;
    urls: Urls;
    likes: number;
}

export interface Urls {
    small: string;
}