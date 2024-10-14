import React, { useState } from 'react';

const LogHoursModal = ({ task, onClose, onSave }) => {
  const [renderedHours, setRenderedHours] = useState('');

  const handleSave = () => {
    if (renderedHours) {
      onSave(renderedHours);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Log Hours</h2>
        <p className="mb-4">Task for: {task.studentName}</p>
        <div className="mb-4">
          <label className="block font-semibold">Rendered Hours</label>
          <input
            type="number"
            value={renderedHours}
            onChange={(e) => setRenderedHours(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LogHoursModal;
