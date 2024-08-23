import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Credential/Register';
import Login from './Components/Credential/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/signin' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
