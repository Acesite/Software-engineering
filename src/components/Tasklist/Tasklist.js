import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5; // Show 5 tasks per page

  // Calculate the indexes for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle pagination
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Community Service Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-center">Task Name</th>
                <th className="px-4 py-2 text-center">Slots Needed</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((task, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-center">{task.name}</td>
                  <td className="px-4 py-2 text-center">{task.slots} slots</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-500 px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-100 transition ease-in-out duration-150"
                        onClick={() => onEdit(indexOfFirstTask + index)}
                      >
                        <CiEdit className="w-5 h-5" /> {/* Edit icon */}
                        <span>Edit</span>
                      </button>

                      <button
                        className="text-red-500 px-4 py-2 rounded flex items-center space-x-2 hover:bg-red-100 transition ease-in-out duration-150"
                        onClick={() => onDelete(indexOfFirstTask + index)}
                      >
                        <MdOutlineDelete className="w-5 h-5" /> {/* Delete icon */}
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="flex space-x-2">
        {/* Pagination Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-4 py-2 rounded transition ease-in-out duration-150 ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-blue-500 hover:bg-blue-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function TaskListWithPagination({ tasks, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  
  // Calculate the indexes for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle pagination
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <TaskList tasks={currentTasks} onEdit={onEdit} onDelete={onDelete} />
      
      {/* Pagination Controls - Outside TaskList */}
      {tasks.length > tasksPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
