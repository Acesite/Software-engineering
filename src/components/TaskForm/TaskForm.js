import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { CiSaveUp2 } from "react-icons/ci";

const TaskForm = ({ newTask, handleChange, handleAddTask }) => {
  // Dummy data for students, tracks, strands, and tasks
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ];

  const tracks = [
    'Track A',
    'Track B',
    'Track C',
  ];

  const strands = [
    'Strand 1',
    'Strand 2',
    'Strand 3',
  ];

  const tasks = [
    'Task 1',
    'Task 2',
    'Task 3',
  ];

  const [error, setError] = useState('');

  // Validation function to check if required fields are filled
  const validateForm = () => {
    if (!newTask.studentName) {
      setError('Please select a student.');
      return false;
    }
    if (!newTask.track) {
      setError('Please select a track.');
      return false;
    }
    if (!newTask.strand) {
      setError('Please select a strand.');
      return false;
    }
    if (!newTask.task) {
      setError('Please select a task.'); // Validation for the new task dropdown
      return false;
    }
    if (!newTask.violation) {
      setError('Please enter the nature of the violation.');
      return false;
    }
    if (!newTask.dutyHours) {
      setError('Please enter the duty hours.');
      return false;
    }
    if (!newTask.date) {
      setError('Please select a date.');
      return false;
    }
    if (!newTask.inTime) {
      setError('Please select a time-in.');
      return false;
    }
    if (!newTask.outTime) {
      setError('Please select a time-out.');
      return false;
    }
    if (!newTask.personInCharge) {
      setError('Please enter the person in charge.');
      return false;
    }
    setError(''); // Clear error if all fields are valid
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleAddTask();
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-5">
      <h2 className="text-xl font-semibold mb-4 text-black-500">Assign Task</h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-300 text-red-800 p-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* Student Name Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Student Name</label>
        <select
          name="studentName"
          value={newTask.studentName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Student</option>
          {students.length > 0 ? (
            students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))
          ) : (
            <option value="">Loading students...</option>
          )}
        </select>
      </div>

      {/* Track Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Track</label>
        <select
          name="track"
          value={newTask.track}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Track</option>
          {tracks.length > 0 ? (
            tracks.map((track, index) => (
              <option key={index} value={track}>
                {track}
              </option>
            ))
          ) : (
            <option value="">Loading tracks...</option>
          )}
        </select>
      </div>

      {/* Strand Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Strand</label>
        <select
          name="strand"
          value={newTask.strand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Strand</option>
          {strands.length > 0 ? (
            strands.map((strand, index) => (
              <option key={index} value={strand}>
                {strand}
              </option>
            ))
          ) : (
            <option value="">Loading strands...</option>
          )}
        </select>
      </div>

      {/* Task Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Task</label>
        <select
          name="task" // Add this new field to your state management
          value={newTask.task}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Task</option>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))
          ) : (
            <option value="">Loading tasks...</option>
          )}
        </select>
      </div>

      {/* Other fields */}
      <div className="mb-4">
        <label className="block font-semibold"> Violation</label>
        <input
          type="text"
          name="violation"
          value={newTask.violation}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter violation"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Duty Hours</label>
        <input
          type="number"
          name="dutyHours"
          value={newTask.dutyHours}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter duty hours"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Date</label>
        <input
          type="date"
          name="date"
          value={newTask.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Time In</label>
        <input
          type="time"
          name="inTime"
          value={newTask.inTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Time Out</label>
        <input
          type="time"
          name="outTime"
          value={newTask.outTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Person in Charge</label>
        <input
          type="text"
          name="personInCharge"
          value={newTask.personInCharge}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter person in charge"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
      >
        <CiSaveUp2 className="w-5 h-5 mr-2" />
        Save
      </button>

    </div>
  );
};

export default TaskForm;
