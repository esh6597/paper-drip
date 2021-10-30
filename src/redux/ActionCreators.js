import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// BLOG ARTICLES

export const fetchArticles = () => dispatch => {

    dispatch(articlesLoading);

    return fetch(baseUrl + 'articles')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(articles => dispatch(addArticles(articles)))
        .catch(error => dispatch(articlesFailed(error.message)));
};

export const articlesLoading = () => ({
    type: ActionTypes.ARTICLES_LOADING
});

export const addArticles = articles => ({
    type: ActionTypes.ADD_ARTICLES,
    payload: articles
});

export const articlesFailed = errMess => ({
    type: ActionTypes.ARTICLES_FAILED,
    payload: errMess
});

//STORE ITEMS

export const fetchItems = () => dispatch => {

    dispatch(itemsLoading);

    return fetch(baseUrl + 'items')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(articles => dispatch(addItems(articles)))
        .catch(error => dispatch(itemsFailed(error.message)));
};

export const itemsLoading = () => ({
    type: ActionTypes.ITEMS_LOADING
});

export const addItems = items => ({
    type: ActionTypes.ADD_ITEMS,
    payload: items
});

export const itemsFailed = errMess => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errMess
});