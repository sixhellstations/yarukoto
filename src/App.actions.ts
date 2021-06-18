import { Dispatch } from 'react';
import { nanoid } from 'nanoid';
import store from 'redux/store';
import { AppActions, SET_TODO_LIST, TodoList } from 'App.types';

export const setTodoList = (todoList: TodoList): AppActions => ({
    type: SET_TODO_LIST,
    payload: todoList
});

export const addTodo = (text: string) => async (dispatch: Dispatch<AppActions>) => {
    dispatch(setTodoList([...store.getState().todoList, { id: nanoid(), text }]));
};

export const removeTodoById = (id: string) => async (dispatch: Dispatch<AppActions>) => {
    dispatch(setTodoList(store.getState().todoList.filter((todo) => todo.id !== id)));
};

export const updateTodoById = (id: string, text: string) => async (dispatch: Dispatch<AppActions>) => {
    dispatch(setTodoList(store.getState().todoList.map((todo) => (todo.id === id ? { ...todo, text } : todo))));
};
