import TodoAPI, { TodoState } from './TodoAPI';
import {
  TodoAction,
  TODO_LOADING,
  TODO_SUCCESS,
  TODO_FAILURE,
  TODO_MESSAGE,
  TODO_CREATED,
  TODO_UPDATED,
} from './todoTypes';

export const defaultState: TodoState = {
  loading: true,
  data: [],
  error: '',
  alert: '',
};

const reducer = (state = defaultState, action: TodoAction): TodoState => {
  const { type, payload } = action;
  switch (type) {
    case TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TODO_SUCCESS:
      return {
        loading: false,
        data: payload as TodoAPI[],
        error: '',
        alert: '',
      };
    case TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload as string,
        alert: '',
      };
    case TODO_MESSAGE:
      return {
        ...state,
        loading: false,
        error: '',
        alert: payload as string,
      };
    case TODO_CREATED:
      return {
        ...state,
        data: [...(state.data as TodoAPI[]), payload as TodoAPI],
        error: '',
        alert: '',
      };
    case TODO_UPDATED:
      const newTodos = [...(state.data as TodoAPI[])];
      newTodos.find(({ id }) => id === payload);
      //! Unfinished
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
