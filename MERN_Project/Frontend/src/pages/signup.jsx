import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/signup.css'
import { API_URL, notify } from '../utils';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const navigate = useNavigate();

  const handleClick = async () => {
    if (user.password !== user.confirmpassword) {
      notify("Confirm Password Don't Match" ,'success');
      return;
    }

    if (user.password.length < 8) {
      notify("Password To Small" ,'warning');
      return;
    }

    const { confirmpassword, ...userData } = user;

    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
    
      
 
      if (result.success == true) {
          notify(result.message , 'success')
          alert("Navigating to Login Page")
          setTimeout(() => navigate('/login'), 800);
        
      }
      else if(result.success == false){

        notify(result.message,'error')

      }
    } catch (error) {
       notify("Something Went Wrong ! Try Again Later !" ,'info');
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            placeholder="Enter Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={user.email}
            placeholder="Enter Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            placeholder="Enter Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            id="confirmpassword"
            type="password"
            value={user.confirmpassword}
            placeholder="Confirm Password"
            onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })}
            required
          />
        </div>

         <div className="signup-link">
                  <label>Already Have an account?</label>
                  <Link to="/login">login</Link>
          </div>
          <button type="button" onClick={handleClick}>Sign Up</button>

      </form>
    </div>
  );
}

export default Signup;
