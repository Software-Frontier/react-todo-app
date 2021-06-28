import { FC } from 'react';
import { GrCheckboxSelected, GrCheckbox, GrEdit, GrTrash, GrSave } from 'react-icons/gr';
import useTodos from '../hooks/useTodos';

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const TodoLists: FC<Props> = ({ id, title, completed }) => {
  const { handleUpdate, edit } = useTodos();

  return (
    <div id={id.toString()}>
      <p>
        <button type='button'>
          <span>
            {completed ? <GrCheckboxSelected /> : <GrCheckbox />}
          </span>
        </button>
      </p>
      <p>
        <input
          type='text'
          defaultValue={title}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
          readOnly={edit}
        />
      </p>
      <p>
        <button type='button' onClick={() => handleUpdate(id, title, completed)}>
          <span>
            {edit ? <GrEdit /> : <GrSave />}
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
  )
}

export default TodoLists;
