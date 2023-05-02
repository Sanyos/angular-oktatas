import { Todo } from "./app.component";
import { createAction, props } from "@ngrx/store";

export const loadTodos = createAction('[Todo] load todos');
export const addTodo =  createAction('[Todo] add todo', props<{todo:Todo}>());
export const deleteTodo = createAction('[Todo] delete todo', props<{id:number}>());
export const completeTodo = createAction('[Todo] complete todo', props<{id:number}>());
export const setTodos =  createAction('[Todo] set todo', props<{todos:Todo[]}>());
