import { FC } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div id='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
