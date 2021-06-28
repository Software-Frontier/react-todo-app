import TodoAPI from './TodoAPI';

export const TODO_LOADING = 'TODO_LOADING';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAILURE = 'TODO_FAILURE';
export const TODO_MESSAGE = 'TODO_MESSAGE';
export const TODO_CREATED = 'TODO_CREATED';
export const TODO_UPDATED = 'TODO_UPDATED';
export const TODO_DELETED = 'TODO_DELETED';

export interface TodoLoading {
  type: typeof TODO_LOADING;
  payload?: null;
}

export interface TodoSuccess {
  type: typeof TODO_SUCCESS;
  payload: TodoAPI[];
}

export interface TodoFailure {
  type: typeof TODO_FAILURE;
  payload: string;
}

export interface TodoMessage {
  type: typeof TODO_MESSAGE;
  payload: string;
}

export interface TodoCreated {
  type: typeof TODO_CREATED;
  payload: TodoAPI;
}

export interface TodoUpdated {
  type: typeof TODO_UPDATED;
  payload: TodoAPI;
}

export interface TodoDeleted {
  type: typeof TODO_DELETED;
  payload: number;
}

export type TodoAction =
  | TodoLoading
  | TodoSuccess
  | TodoFailure
  | TodoMessage
  | TodoCreated
  | TodoUpdated
  | TodoDeleted;
