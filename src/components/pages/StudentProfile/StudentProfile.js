import React, { useState } from 'react';
import SidebarNavigation from '../../Sidebar/Sidebar';

export default function StudentProfile() {
  const [studentsData, setStudentsData] = useState([]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    track: '',
    strand: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedStudent = {
      name: newStudent.name,
      communityService: 'N/A',
      track: newStudent.track,
      strand: newStudent.strand,
      violation: 'None',
      dutyHours: 'N/A',
      renderedHours: 'N/A',
      date: 'N/A',
      inTime: 'N/A',
      outTime: 'N/A',
      personInCharge: 'N/A',
      status: 'Pending',
      avatar: 'https://via.placeholder.com/50',
    };

    setStudentsData((prevData) => [...prevData, addedStudent]);

    setNewStudent({
      name: '',
      track: '',
      strand: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white min-h-screen hidden md:block">
        <SidebarNavigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500">Student Profiles</h1>
            <p className="text-sm md:text-base text-gray-500">
              A list of students and their community service hours, status, and other details.
            </p>
          </div>
        </div>

        {/* Add Student Form */}
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Add Student</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={newStudent.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border rounded-lg p-2"
            />
            <input
              type="text"
              name="track"
              value={newStudent.track}
              onChange={handleChange}
              placeholder="Track"
              required
              className="border rounded-lg p-2"
            />
            <input
              type="text"
              name="strand"
              value={newStudent.strand}
              onChange={handleChange}
              placeholder="Strand"
              required
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              name="password"
              value={newStudent.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              name="confirmPassword"
              value={newStudent.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="border rounded-lg p-2"
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Add Student
          </button>
        </form>

        {/* Student List */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Community Service</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Track</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Strand</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Violation</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Duty Hours</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Rendered Hours</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Time In</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Time Out</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Person in Charge</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Status</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {studentsData.length > 0 ? (
                studentsData.map((student, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-4 px-4 flex items-center">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{student.name}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium text-gray-900">{student.communityService}</p>
                    </td>
                    <td className="py-4 px-4">{student.track}</td>
                    <td className="py-4 px-4">{student.strand}</td>
                    <td className="py-4 px-4">{student.violation}</td>
                    <td className="py-4 px-4">{student.dutyHours}</td>
                    <td className="py-4 px-4">{student.renderedHours}</td>
                    <td className="py-4 px-4">{student.date}</td>
                    <td className="py-4 px-4">{student.inTime}</td>
                    <td className="py-4 px-4">{student.outTime}</td>
                    <td className="py-4 px-4">{student.personInCharge}</td>
                    <td className="py-4 px-4">{student.status}</td>
                    <td className="py-4 px-4">
                      {/* Add edit and delete buttons here if needed */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="py-4 px-4 text-center text-gray-500">
                    No students available. Please add a student.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
