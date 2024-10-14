import React, { useState } from 'react';
import SidebarNavigation from '../../Sidebar/Sidebar';
import TaskForm from '../../TaskForm/TaskForm';
import TaskTable from '../../TaskTable/TaskTable';
import Pagination from '../../Pagination/Pagination';
import LogHoursModal from '../../LogHoursModal/LogHoursModal';

const ManageStudent = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const [selectedTask, setSelectedTask] = useState(null);
  const [showLogModal, setShowLogModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [newTask, setNewTask] = useState({
    studentName: '',
    track: '',
    strand: '',
    violation: '',
    dutyHours: '',
    personInCharge: '',
    date: '',
    inTime: '',
    outTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleAddTask = () => {
    if (newTask.studentName && newTask.dutyHours) {
      if (isEditing) {
        setTasks(tasks.map(task => 
          task === selectedTask ? { ...task, ...newTask } : task
        ));
        setIsEditing(false);
      } else {
        setTasks([...tasks, { ...newTask, status: 'Pending', renderedHours: 0 }]);
      }
      setNewTask({
        studentName: '',
        track: '',
        strand: '',
        violation: '',
        dutyHours: '',
        personInCharge: '',
        date: '',
        inTime: '',
        outTime: ''
      });
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setNewTask({
      studentName: task.studentName,
      track: task.track,
      strand: task.strand,
      violation: task.violation,
      dutyHours: task.dutyHours,
      personInCharge: task.personInCharge,
      date: task.date,
      inTime: task.inTime,
      outTime: task.outTime
    });
    setIsEditing(true);
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter(t => t !== task));
  };

  const handleLogHours = (task) => {
    setSelectedTask(task);
    setShowLogModal(true);
  };

  const saveLoggedHours = (renderedHours) => {
    setTasks(tasks.map(task => {
      if (task === selectedTask) {
        const updatedRenderedHours = parseFloat(task.renderedHours) + parseFloat(renderedHours);
        const remainingHours = parseFloat(task.dutyHours) - updatedRenderedHours;
        return {
          ...task,
          renderedHours: updatedRenderedHours,
          dutyHours: remainingHours > 0 ? remainingHours : 0,
          status: remainingHours <= 0 ? 'Completed' : 'Pending',
        };
      }
      return task;
    }));
    setShowLogModal(false);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex bg-[#f3f3f3]">
      <SidebarNavigation />
      <div className="w-full ml-64 p-6">
        <TaskForm 
          newTask={newTask} 
          handleChange={handleChange} 
          handleAddTask={handleAddTask} 
        />

        <TaskTable 
          tasks={currentTasks} 
          onLogHours={handleLogHours} 
          onEditTask={handleEditTask} 
          onDeleteTask={handleDeleteTask} 
        />

        <Pagination
          tasksPerPage={tasksPerPage}
          totalTasks={tasks.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        {showLogModal && (
          <LogHoursModal
            task={selectedTask}
            onClose={() => setShowLogModal(false)}
            onSave={saveLoggedHours}
          />
        )}
      </div>
    </div>
  );
};

export default ManageStudent;
