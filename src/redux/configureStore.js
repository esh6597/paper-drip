//Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Reducers
import { Articles } from './reducers/articles';
import { Items } from './reducers/items';
import { Comments } from './reducers/comments';
import { Reviews } from './reducers/reviews';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles,
            items: Items,
            comments: Comments,
            reviews: Reviews
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}