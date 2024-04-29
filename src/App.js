import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
