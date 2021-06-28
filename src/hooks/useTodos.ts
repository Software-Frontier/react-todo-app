import { useContext, useEffect, FormEvent, ChangeEvent, useState } from 'react';
import AppContext, {
  ContextState,
  todoLoading,
  todoFailure,
  todoSuccess,
  todoMessage,
  todoCreated,
  todoUpdated,
} from '../context';
import TodoAPI from '../context/todo/TodoAPI';

const useTodos = () => {
  const { todos, todosDispatch } = useContext(AppContext) as ContextState;
  const [input, setInput] = useState<string | null>(null);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    const fetchAPI = async (dispatch: typeof todosDispatch) => {
      dispatch(todoLoading());
      const res = await fetch(
        'https://my-json-server.typicode.com/Software-Frontier/json-database/todos',
        { method: 'GET' }
      );

      if (!res.ok) {
        console.clear();
        return dispatch(
          todoFailure(`Something went wrong! Error ${res.status}`)
        );
      }

      const data: TodoAPI[] = await res.json();
      return dispatch(todoSuccess(data));
    };

    fetchAPI(todosDispatch);
  }, []);

  const postAPI = async (title: string) => {
    todosDispatch(todoLoading());
    const res = await fetch(
      `https://my-json-server.typicode.com/Software-Frontier/json-database/todos`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //* For Images => 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          id: Date.now(),
          title,
          completed: false,
          deleted: false,
        }),
      }
    );

    if (!res.ok) {
      return todosDispatch(
        todoFailure(`Fail to create todo! Error ${res.status}`)
      );
    }

    const data: TodoAPI = await res.json();
    todosDispatch(todoCreated(data));

    return todosDispatch(
      todoMessage(`Create todo successful. Code ${res.status}`)
    );
  };

  const putAPI = async (todo: TodoAPI) => {
    todosDispatch(todoLoading());
    const res = await fetch(
      `https://my-json-server.typicode.com/Software-Frontier/json-database/todos/${todo.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      }
    );

    if (!res.ok) {
      return todosDispatch(
        todoMessage(`Fail to update todo! Error ${res.status}`)
      );
    }

    const data: TodoAPI = await res.json();
    todosDispatch(todoUpdated(data));

    return todosDispatch(
      todoMessage(`Edit todo successful. Code ${res.status}`)
    );
  };

  const handleClose = () => {
    todosDispatch(todoMessage(''));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setInput((prev) => e.target.value);
    }
    return;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      return todosDispatch(todoMessage('Ooops! Please enter todo!'));
    }
    postAPI(input);
    setInput('');
  };

  const handleUpdate = (id: number, title: string, completed: boolean) => {
    setEdit((prev) => !prev);
  };

  return { todos, handleClose, handleChange, handleSubmit, handleUpdate, edit };
};

export default useTodos;
