import React, { useState } from 'react';
import Home from './components/home';
import Add_Expense from './components/Add_Expense';
import Signup from './pages/signup';
import Login from './pages/login';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import View_Expense from './components/View_Exp';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import RefrshHandler from './RefereshHandler';
import { ToastContainer , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
 
    <Router>
     
      <div className="app-container">

      <Navbar />
      <ToastContainer transition={Slide} /> 
        <div className="content-container">
        
          <RefrshHandler setIsAuthenticated={setIsAuthenticated}/>

          <Routes>

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/add-expense" element={<Add_Expense />} />
            <Route path="/view-expense" element={<View_Expense />} />
            <Route path="/signup" element={<Signup />} />  
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />

    
          </Routes>

          <Footer/>

        </div>
     
        
      </div>
      
    </Router>
  );
}

export default App;
