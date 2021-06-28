import { FC, useReducer } from 'react';
import todosReducer, { defaultState as todosState } from './todo/todoReducer';
import AppContext from './';

const AppProvider: FC = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducer, todosState);

  return (
    <AppContext.Provider value={{ todos, todosDispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
