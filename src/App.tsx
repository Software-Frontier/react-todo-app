import { FC } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App: FC = () => {
  return (
    <div id='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
