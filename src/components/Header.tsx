import { FC } from 'react';
import { BsPencil, BsPlusCircle } from 'react-icons/bs';
import useTodos from '../hooks/useTodos';

const Header: FC = () => {
  const { handleChange, handleSubmit } = useTodos();

  return (
    <header id='Header'>
      <div>
        <h1>React Todo App</h1>
        <h2>With Bulma, Dart Sass, Gulp and Typescript</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <input
                type='text'
                placeholder='Please enter new todo...'
                onChange={handleChange}
              />
              <span><BsPencil fontSize='1.5em' /></span>
            </p>
            <button type='submit'>
              <span>Add Todo</span>
              <span><BsPlusCircle fontSize='1.5em' /></span>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header;
