import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Signup/>}/>
      <Route path='/login'element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
