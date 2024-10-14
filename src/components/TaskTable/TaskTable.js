import React, { useState } from 'react';
import { TbClockPlus } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskTable = ({ tasks, onLogHours, onEditTask, onDeleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const openModal = (task) => {
    setTaskToDelete(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const confirmDelete = () => {
    onDeleteTask(taskToDelete);
    closeModal();
  };

  return (
    <div className="bg-white p-6 rounded shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">Community Service Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available. Please add a task.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 table-auto">
            <thead>
              <tr className="text-center">
                <th className="py-2 px-4 border-b text-sm">Student Name</th>
                <th className="py-2 px-4 border-b text-sm">Track</th>
                <th className="py-2 px-4 border-b text-sm">Strand</th>
                <th className="py-2 px-4 border-b text-sm">Task</th> {/* New Task column */}
                <th className="py-2 px-4 border-b text-sm">Violation</th>
                <th className="py-2 px-4 border-b text-sm">Duty Hours</th>
                <th className="py-2 px-4 border-b text-sm">Rendered Hours</th>
                <th className="py-2 px-4 border-b text-sm">Date</th>
                <th className="py-2 px-4 border-b text-sm">Time In</th>
                <th className="py-2 px-4 border-b text-sm">Time Out</th>
                <th className="py-2 px-4 border-b text-sm">Person in Charge</th>
                <th className="py-2 px-4 border-b text-sm">Status</th>
                <th className="py-2 px-4 border-b text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.studentName}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.track}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.strand}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.task}</td> {/* New Task cell */}
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.violation}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.dutyHours}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.renderedHours}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.date}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.inTime}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.outTime}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">{task.personInCharge}</td>
                  <td className="py-2 px-4 border-b text-sm align-middle">
                    <span
                      className={`px-2 py-1 rounded-full text-black ${
                        task.status === 'Completed' ? '' : ''
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b text-sm align-middle">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => onLogHours(task)}
                        className="text-green px-4 py-2 rounded  mb-2"
                      >
                        <TbClockPlus className="w-5 h-5 inline-block text-green-800" />
                      </button>
                      <button
                        onClick={() => onEditTask(task)}
                        className="text-black px-4 py-2 rounded  mb-2"
                      >
                        <CiEdit className="w-5 h-5 inline-block text-blue-500" />
                      </button>
                      <button
                        onClick={() => openModal(task)}
                        className="text-red px-4 py-2 rounded "
                      >
                        <CiTrash className="w-5 h-5 inline-block text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal for Deletion */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={closeModal}
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
};

export default TaskTable;
