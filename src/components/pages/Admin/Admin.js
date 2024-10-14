import React from 'react';
import SidebarNavigation from '../../Sidebar/Sidebar';
import Clock from '../../Clock/Clock';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <SidebarNavigation />
      </div>

      {/* Main Content (scrollable) */}
      <div className="flex-1 bg-gray-100">
        {/* Header Section */}
        <div className="sticky top-0  flex items-center justify-between p-6  ">
          <h1 className="text-3xl font-bold text-blue-500">Admin Dashboard</h1>
          <Clock/>
        </div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 p-6  ">
          <Card title="Total Tasks" value="12" />
          <Card title="Pending Tasks" value="4" />
          <Card title="Completed Tasks" value="8" />
          <Card title="Total Logged Hours" value="24 hrs" />
        </div>

        {/* Recent Student Activities */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 mx-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">Recent Student Activities</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Dave logged 5 hours at Library</span>
              <span>2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span>John completed 8 hours at SBIT 215</span>
              <span>1 day ago</span>
            </li>
          </ul>
        </div>

        {/* Students Near Completion */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 mx-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">Students Near Completion</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Jane - 6 hours completed / 8 hours total</span>
              <span>75% complete</span>
            </li>
            <li className="flex justify-between">
              <span>Mark - 7 hours completed / 8 hours total</span>
              <span>87% complete</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
<div className="bg-white shadow-md rounded-lg p-6 mx-6 mb-8">
  <h2 className="text-xl font-semibold mb-4 text-blue-500">Quick Actions</h2>
  <div className="space-x-4">
    <Link to="/assign-task">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Assign Task</button>
    </Link>
    <Link to="/log-hours">
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Log Hours</button>
    </Link>
    <Link to="/Manage-student">
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Mark Complete</button>
    </Link>
  </div>
</div>
      </div>
    </div>
  );
}

export default Admin;
