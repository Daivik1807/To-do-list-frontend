import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import TodoList from './components/Todo/TodoList';
import Navbar from './components/Layout/Navbar';
import './App.css';

function ProtectedRoute({ children }) {
  const { user } = React.useContext(require('./context/AuthContext').AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <TodoProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><TodoList /></ProtectedRoute>} />
            </Routes>
          </div>
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;