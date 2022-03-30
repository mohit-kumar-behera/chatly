import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './pages/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AuthPage/LoginPage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import ChatPage from './pages/Chat/ChatPage';
import ChattingPage from './pages/Chat/ChattingPage';
import './App.css';

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="chat/:id" element={<ChattingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
