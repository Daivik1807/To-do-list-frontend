import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand">ToDoApp</div>
      <div className="nav-links">
        {user ? (
          <>
            <span className="nav-user">Welcome, {user.email}</span>
            <button className="nav-btn" onClick={() => { logout(); navigate('/login'); }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;