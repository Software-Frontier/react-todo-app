import { createContext, Dispatch } from 'react';
import { TodoState } from './todo/TodoAPI';
import { TodoAction } from './todo/todoTypes';

export interface ContextState {
  todos: TodoState;
  todosDispatch: Dispatch<TodoAction>;
}

const AppContext = createContext<ContextInterface | {}>({});

export * from './todo/todoActions';
export default AppContext;
