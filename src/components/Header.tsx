import { FC } from 'react';
import { BsPencil } from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Header: FC = () => {
  return (
    <header id='Header'>
      <div>
        <h1>React Todo App</h1>
        <h2>With Bulma, Dart Sass, Gulp and Typescript</h2>
        <form>
          <div>
            <p>
              <input type='text' placeholder='Please enter new todo here...' />
              <span><BsPencil fontSize='1.5em' /></span>
            </p>
            <button type='submit'>
              <span>Add Todo</span>
              <span><IoIosAddCircleOutline fontSize='1.5em' /></span>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header;
