import HomePage from './page/home/HomePage';
import SearchPage from './page/search/SearchPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:inpuSearch" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
