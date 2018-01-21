import axios from 'axios';

// define Constants
const ROOT_URL = 'https://www.reddit.com/r/changemyview/search.json?q=';
const CATEGORY_ROOT_URL = 'https://www.reddit.com/r/changemyview/';
const END_URL = "&restrict_sr=on&sort=relevance&t=all";

// export action types
export const FETCH_VIEWS = 'FETCH_VIEWS';
export const FETCH_VIEW = 'FETCH_VIEW';
export const EMPTY_VIEWS = 'EMPTY_VIEWS';
export const REMOVE_ACTIVE_VIEW = 'REMOVE_ACTIVE_VIEW';

/**
 * empty array of views in state
 * returns empty array 
 */
export function emptyViews() {
  return {
    type: EMPTY_VIEWS,
    payload: []
  }
}

/**
 * 
 */
export function removeActiveView() {
	return {
		type: REMOVE_ACTIVE_VIEW,
		payload: ''
	}
}

/**
 * returns action with pending promise holding views of a particular category
 * @param { String } category category originating from data-attribute on Buttons
 */
export function fetchViewsByCategory(category) {
	const url =`${CATEGORY_ROOT_URL}${category}/.json`;
	const request = axios.get(url);

	return {
		type: FETCH_VIEWS,
		payload: request
	};
}

/**
 * returns action with pending promise holding views
 * takes search term from SearchBar and forms URL to make GET request
 * @param { String } term 
 */
export function fetchViews(term) {
	const cleanTerm = term.split(" ").join("+");
	const url = `${ROOT_URL}${cleanTerm}${END_URL}`;
	const request = axios.get(url);

	return {
		type: FETCH_VIEWS,
		payload: request
	};
}

/**
 * returns action with pending promise holding a particular view with its replies
 * @param { String } url 
 */
export function fetchView(url) {
	const request = axios.get(url);

	return {
		type: FETCH_VIEW,
		payload: request
	};
}