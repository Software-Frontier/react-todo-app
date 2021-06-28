import { FC } from 'react';
import { GrSave } from 'react-icons/gr';

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const Section: FC<Props> = ({ id, title, completed }) => {
  return (
    <section>
      <div id={id.toString()}>
        <p>
          <input
            type='text'
            defaultValue={title}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            readOnly={false}
          />
        </p>
        <p>
          <button type='button'>
            <span>
              <GrSave />
            </span>
          </button>
        </p>
      </div>
    </section>
  )
}

export default Section;