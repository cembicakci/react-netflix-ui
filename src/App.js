import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/watch' element={<Watch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
