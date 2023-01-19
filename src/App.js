import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import Navbar from './Components/Layout/Navbar';

import Home from './Components/Pages/Home';

import LoginPage from "./Components/Pages/LoginPage";
import NotFound from './Components/Pages/NotFound';

import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import User from "./Components/Users/User";
function App() {
  return (
    <div className="App">
  <Router>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    
     <Route path="/login" element={<LoginPage/>}  />
    <Route path="/*" element={<NotFound />} />
    <Route  path="/users/add" element={<AddUser/>} />
    <Route path="/users/edit/:id" element={<EditUser/>} />
    <Route  path="/users/:id" element={<User/>} />
    </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;
