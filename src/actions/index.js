import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com/r/changemyview/search.json?q=';
// new root url for the new/hot/etc 
const CATEGORY_URL = 'https://www.reddit.com/r/changemyview/';
// becuase its a difernt url than the one above
const END_URL = "&restrict_sr=on&sort=relevance&t=all";

export const FETCH_VIEWS = 'FETCH_VIEWS';
export const FETCH_VIEW = 'FETCH_VIEW';
export const EMPTY_VIEWS = 'EMPTY_VIEWS';

export function emptyViews() {
  return {
    type: EMPTY_VIEWS,
    payload: []
  }
}

// make action creator for fetchViewsByCateogry
export function fetchViewsByCategory(category) {
	const url =`${CATEGORY_URL}${category}/.json`;
	const request = axios.get(url);

	return {
		type: FETCH_VIEWS,
		payload: request
	};
}

export function fetchViews(term) {
	const cleanTerm = term.split(" ").join("+");
	const url = `${ROOT_URL}${cleanTerm}${END_URL}`;
	const request = axios.get(url);

	return {
		type: FETCH_VIEWS,
		payload: request
	};
}

export function fetchView(url) {
	const request = axios.get(url);

	return {
		type: FETCH_VIEW,
		payload: request
	};
}