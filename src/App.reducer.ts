import { AppActions, AppState, SET_TODO_LIST } from 'App.types';

export const initialState: AppState = {
    todoList: []
};

const appReducer = (state = initialState, action: AppActions): AppState => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state,
                todoList: action.payload
            };
        default:
            return state;
    }
};

export default appReducer;
