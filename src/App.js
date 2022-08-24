
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import User from './pages/User';
import Organ from './pages/Organization';



function App() {
  return (
    <div>
      <Link to='/'>User</Link>
      <Link to='/Organ'>Organization</Link>

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/Organ" element={<Organ />} />
      </Routes>
      
    </div>
  );
}

export default App;
