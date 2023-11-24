import { Route, Routes } from 'react-router-dom';
import { PageContent } from './components/PageContents';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageContent/>}>

      </Route>
    </Routes>
  );
}

export default App;
