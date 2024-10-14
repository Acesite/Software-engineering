import React, { useState } from 'react';
import SidebarNavigation from '../../Sidebar/Sidebar';
import CommunityServiceForm from '../../CommunityServiceForm/CommunityServiceForm';
import TaskList from '../../Tasklist/Tasklist';

function CommunityService() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [editIndex, setEditIndex] = useState(null); // To track if we're editing a task

  // Add or update task
  const handleTaskSubmit = (task) => {
    if (editIndex !== null) {
      // Update the task if we're editing
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add a new task
      setTasks([...tasks, task]);
    }
  };

  // Delete a task
  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Edit a task (pre-fill the form)
  const handleTaskEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <SidebarNavigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Header Section */}
        <div className="sticky top-0  flex items-center justify-between p-6  shadow-md bg-[#F3F4F6]">
          <h1 className="text-2xl font-bold text-blue-500">Manage Community Service Tasks</h1>
        </div>

        {/* Main Content Section */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <CommunityServiceForm
                onSubmit={handleTaskSubmit}
                taskToEdit={editIndex !== null ? tasks[editIndex] : null}
              />
            </div>

            {/* Task List Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Task List</h2>
              <TaskList tasks={tasks} onEdit={handleTaskEdit} onDelete={handleTaskDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityService;
