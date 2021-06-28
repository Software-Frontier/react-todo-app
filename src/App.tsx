import { FC } from 'react';
import AppProvider from './context/AppProvider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: FC = () => {

  return (
    <AppProvider>
      <div id='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
