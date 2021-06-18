import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer, { initialState } from '../App.reducer';

const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = localStorage.getItem('state');

const persistedState = state ? JSON.parse(state) : initialState;

const store = createStore(appReducer, persistedState, compose(applyMiddleware(...middleware), composeEnhancers()));

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
});

export type State = ReturnType<typeof appReducer>;

export default store;
