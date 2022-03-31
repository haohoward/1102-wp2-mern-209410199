import './App.css';
import { Landing_99, Dashboard, Regster, Error_99 } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App_99() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing_99 />} />
        <Route path='regster' element={<Regster />} />
        <Route path='*' element={<Error_99 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_99;
