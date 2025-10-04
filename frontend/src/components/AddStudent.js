import React, { useState } from 'react';
import { addStudent } from '../services/studentService';

const AddStudent = ({ refreshStudents }) => {
  const [student, setStudent] = useState({
    name: '', roomNumber: '', department: '', year: '', phone: ''
  });

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addStudent(student);
    setStudent({ name: '', roomNumber: '', department: '', year: '', phone: '' });
    alert('Student added successfully!');
    refreshStudents();
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
        <input name="roomNumber" value={student.roomNumber} onChange={handleChange} placeholder="Room Number" required />
        <input name="department" value={student.department} onChange={handleChange} placeholder="Department" required />
        <input name="year" type="number" value={student.year} onChange={handleChange} placeholder="Year" required />
        <input name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;
