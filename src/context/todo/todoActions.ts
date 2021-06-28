import TodoAPI from './TodoAPI';
import {
  TodoLoading,
  TODO_LOADING,
  TodoSuccess,
  TODO_SUCCESS,
  TodoFailure,
  TODO_FAILURE,
  TodoMessage,
  TODO_MESSAGE,
  TodoCreated,
  TODO_CREATED,
  TodoUpdated,
  TODO_UPDATED,
  TodoDeleted,
  TODO_DELETED,
} from './todoTypes';

export const todoLoading = (): TodoLoading => {
  return {
    type: TODO_LOADING,
  };
};

export const todoSuccess = (todos: TodoAPI[]): TodoSuccess => {
  return {
    type: TODO_SUCCESS,
    payload: todos,
  };
};

export const todoFailure = (error: string): TodoFailure => {
  return {
    type: TODO_FAILURE,
    payload: error,
  };
};

export const todoMessage = (message: string): TodoMessage => {
  return {
    type: TODO_MESSAGE,
    payload: message,
  };
};

export const todoCreated = (data: TodoAPI): TodoCreated => {
  return {
    type: TODO_CREATED,
    payload: data,
  };
};

export const todoUpdated = (data: TodoAPI): TodoUpdated => {
  return {
    type: TODO_UPDATED,
    payload: data,
  };
};

export const todoDeleted = (id: number): TodoDeleted => {
  return {
    type: TODO_DELETED,
    payload: id,
  };
};
