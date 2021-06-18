export interface TodoItem {
    id: string;
    text: string;
}

export type TodoList = Array<TodoItem>;

export interface AppState {
    todoList: TodoList;
}

export const SET_TODO_LIST = 'SET_TODO_LIST';

interface SetTodoList {
    type: typeof SET_TODO_LIST;
    payload: TodoList;
}

export type AppActions = SetTodoList;
