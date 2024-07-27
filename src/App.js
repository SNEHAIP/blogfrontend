import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import ViewAll from './components/ViewAll';
import ViewMyPost from './components/ViewMyPost';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/viewmypost' element={<ViewMyPost/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
