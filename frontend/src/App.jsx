import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './pages/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AuthPage/LoginPage';
import LogoutPage from './pages/AuthPage/LogoutPage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import ChatPage from './pages/Chat/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';
import ChattingPage from './pages/Chat/ChattingPage';
import './App.css';

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route
          path="chat/:id"
          element={
            <ProtectedRoute>
              <ChattingPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
