import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Admin from './components/pages/Admin/Admin';
import CommunityService from './components/pages/CommunityService/CommunityService';
import ManageStudent from './components/pages/ManageStudent/ManageStudent';
import StudentProfile from './components/pages/StudentProfile/StudentProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/CommunityService" element={<CommunityService />} />
        <Route path="/Manage-student" element={<ManageStudent />} />
        <Route path="/Student-profile" element={<StudentProfile />} />
        {/* Redirect from "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
