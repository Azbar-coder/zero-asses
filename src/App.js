import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CursorBall from './components/CursorBall';
import StudentMomentum from './pages/StudentMomentum';
import Solutions from './pages/Solutions';

function App() {
  return (
    <BrowserRouter>
      <CursorBall />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/student-momentum' element={<StudentMomentum />}>
        </Route>
        <Route path='/solutions' element={<Solutions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
