import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/login" exact element={<Login/>}></Route>
            <Route path="/registration" exact element={<Registration/>}></Route>
            <Route path="/reset-password" exact element={<ResetPassword/>}></Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
