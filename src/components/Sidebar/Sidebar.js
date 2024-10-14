import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for checking the current path
import 'font-awesome/css/font-awesome.min.css';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TbReportSearch } from "react-icons/tb";
import LogoutIcon from '@mui/icons-material/Logout';
import { GoTasklist } from "react-icons/go";
import { PiStudentLight } from "react-icons/pi";

const SidebarNavigation = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="flex h-screen">
      <div className="fixed bg-white w-64 min-h-screen border-r border-gray-200 p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center mb-8 mr-10">
          <img
            src="/shslogo.jpg" // Replace with the correct path to your logo
            alt="Logo"
            className="h-16 w-auto" // Adjust the size as needed
          />
          {/* Logo Name */}
          <span className="ml-4 text-xl font-semibold text-gray-800">Senior Highschool</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 flex-grow">
          <Link
            to="/admin"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/admin' ? 'bg-blue-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <MdOutlineDashboardCustomize className="h-6 w-6" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/Student-profile"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/admin/students' ? 'bg-indigo-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <PiStudentLight className="h-6 w-6" />
            <span> Student</span>
          </Link>

          <Link
            to="/CommunityService"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/CommunityService' ? 'bg-indigo-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <HiOutlineUserGroup className="h-6 w-6" />
            <span>Community Service</span>
          </Link>

        
          <Link
            to="/Manage-student"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/admin/students' ? 'bg-indigo-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <GoTasklist className="h-6 w-6" />
            <span> Task</span>
          </Link>

  
          <Link
            to="/admin/reports"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/admin/reports' ? 'bg-indigo-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <TbReportSearch className="h-6 w-6" />
            <span>Reports</span>
          </Link>
        </nav>

        {/* User Info */}
        <div className="ml-2 mb-4">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src="/lcc.jpg" alt="User avatar" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Admin</p>
            </div>
          </div>
        </div>

        {/* Options (Log out) */}
        <div className="mt-auto">
          <h3 className="text-gray-600 text-xs font-semibold mb-2"></h3>
          <Link
            to="/login"
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              location.pathname === '/login' ? 'bg-indigo-100 text-blue-600' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <LogoutIcon className="h-6 w-6" />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
