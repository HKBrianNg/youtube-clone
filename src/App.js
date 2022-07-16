import HomePage from './page/home/HomePage';
import SearchPage from './page/search/SearchPage';
import AuthPage from './page/auth/AuthPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/auth/LoginPage';
import CreateVideoPage from './page/createvideo/CreateVideoPage';
import RequireAuth from './component/auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:inpuSearch" element={<SearchPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/createvideo" element={<CreateVideoPage />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          {/* <Route path="/createvideo" element={<CreateVideoPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
