import React, { useState, useEffect } from 'react';
import { CiSaveUp2 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
const CommunityServiceForm = ({ onSubmit, taskToEdit }) => {
  const [name, setName] = useState('');
  const [slots, setSlots] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setSlots(taskToEdit.slots);
    } else {
      setName('');
      setSlots('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, slots });
    setName('');
    setSlots('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
      
      {/* Task Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Task Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Slots Needed Input */}
      <div className="mb-4">
        <label htmlFor="slots" className="block text-gray-700 font-bold mb-2">Slots Needed</label>
        <input
          type="number"
          id="slots"
          value={slots}
          onChange={(e) => setSlots(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
  type="submit"
  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
>
  {/* Conditionally render the correct icon */}
  {taskToEdit ? (
    <>
      <CiEdit className="w-5 h-5" /> {/* Edit icon */}
      <span>Update </span>
    </>
  ) : (
    <>
      <CiSaveUp2 className="w-5 h-5" /> {/* Save icon */}
      <span>Save</span>
    </>
  )}
</button>
    </form>
  );
};

export default CommunityServiceForm;
