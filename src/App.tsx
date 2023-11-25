import { Route, Routes } from 'react-router-dom';
import { PageContent } from './components/PageContent';
import { HomePage } from './components/HomePage/HomePage';
import { UrlPage } from './components/UrlPage/UrlPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageContent/>}>
        <Route index element={<HomePage />}/>
        <Route path=':urlId' element={<UrlPage />}/>
      </Route>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
    </Routes>
  );
}

export default App;
