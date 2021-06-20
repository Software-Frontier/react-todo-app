import { FC } from 'react';
import { GrCheckboxSelected, GrCheckbox, GrEdit, GrTrash } from 'react-icons/all';

const Main: FC = () => {
  return (
    <main id='Main'>
      <div>
        <div>
          <h3>Number of Todos: 9</h3>
          <div>
            <p>
              <button type='button'>
                <span>
                  <GrCheckboxSelected />
                </span>
              </button>
            </p>
            <p>
              <input type='text' className='input' value='Some todo A.' />
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrEdit />
                </span>
              </button>
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrTrash />
                </span>
              </button>
            </p>
          </div>
          <div>
            <p>
              <button type='button'>
                <span>
                  <GrCheckbox />
                </span>
              </button>
            </p>
            <p>
              <input type='text' className='input' value='Some todo A.' />
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrEdit />
                </span>
              </button>
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrTrash />
                </span>
              </button>
            </p>
          </div>
          <div>
            <p>
              <button type='button'>
                <span>
                  <GrCheckbox />
                </span>
              </button>
            </p>
            <p>
              <input type='text' className='input' value='Some todo A.' />
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrEdit />
                </span>
              </button>
            </p>
            <p>
              <button type='button'>
                <span>
                  <GrTrash />
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;
