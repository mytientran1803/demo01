
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import User from './pages/User';
import Organ from './pages/Organization';
import Welcome from './pages/Welcome';
import UserCreate from './pages/UserCreate';
import UserEdit from './pages/UserEdit';



function App() {
  return (
    <div>
      <Link to='/'>Welcome</Link>
      <Link to='/User'>User</Link>
      <Link to='/Organ'>Organization</Link>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user" element={<User />} />
        <Route path="/organ" element={<Organ />} />
        <Route path="/user/create" element={<UserCreate />} />
        <Route path="/user/:id/edit" element={<UserEdit />} />
      </Routes>
      
    </div>
  );
}

export default App;
