import { FC } from 'react';
import TodoLists from './TodoLists';
import Modal from './Modal';
import useTodos from '../hooks/useTodos';

const Main: FC = () => {
  const { todos, handleClose } = useTodos();

  return (
    <>
      <main id='Main'>
        <div>
          <div>
            {todos.loading
              ? <h3>Loading...</h3>
              : <h3>Number of Todos: {todos.data.filter(({ deleted }) => deleted !== true)
                .length}</h3>}
            {todos.data
              && todos.data.filter(({ deleted }) => deleted !== true)
                .map(todo => <TodoLists key={todo.id} {...todo} />)}
          </div>
        </div>
      </main>
      {todos.error && <Modal message={todos.error} handleClose={handleClose} />}
      {todos.alert && <Modal message={todos.alert} handleClose={handleClose} />}
    </>
  )
}

export default Main;
