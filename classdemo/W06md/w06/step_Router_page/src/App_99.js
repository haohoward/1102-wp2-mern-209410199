import './App.css';
import { Landing_99, Dashboard, Register_99, Error_99 } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App_99() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing_99 />} />
        <Route path='Register_99' element={<Register_99 />} />
        <Route path='*' element={<Error_99 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_99;
