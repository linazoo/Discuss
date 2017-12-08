import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com/r/changemyview/search.json?q=';
const END_URL = "&restrict_sr=on&sort=relevance&t=all";

export const FETCH_VIEWS = 'FETCH_VIEWS';

export function fetchViews(term) {
    const cleanTerm = term.split(" ").join("+");
    const url = `${ROOT_URL}${cleanTerm}${END_URL}`;
    const request = axios.get(url);

//     console.log('Request:', request);

    return {
        type: FETCH_VIEWS,
        payload: request
    };
}