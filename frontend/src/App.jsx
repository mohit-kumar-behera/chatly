import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './pages/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AuthPage/LoginPage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import './App.css';

const ChatStartPage = function () {
  return <h1>Some page 4</h1>;
};

const ChatPage = function () {
  return <h1>Some page 5</h1>;
};

const App = function () {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="chat" element={<ChatStartPage />} />
        <Route path="chat/:id" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};

export default App;
