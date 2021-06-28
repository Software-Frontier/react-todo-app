import { FC } from 'react';
import { BsXCircle } from 'react-icons/bs';

interface Props {
  message: string | null;
  handleClose: () => void;
}

const Modal: FC<Props> = ({ message, handleClose }) => {

  return (
    <div id='Modal'>
      <div></div>
      <div>
        <header>
          <p>{message}</p>
        </header>
        <footer>
          <button
            type='button'
            onClick={handleClose}
          >
            <span>Close</span>
            <span>
              <BsXCircle />
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Modal;
