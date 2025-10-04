import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../services/studentService';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  const loadStudents = async () => {
    try {
      const res = await fetchStudents();
      setStudents(res.data);
    } catch (err) {
      console.error(err);
      alert('Cannot connect to backend!');
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      loadStudents(); // Refresh list after deletion
    } catch (err) {
      console.error(err);
      alert('Delete failed!');
    }
  };

  return (
    <div>
      <h2>Students</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Room</th>
            <th>Department</th>
            <th>Year</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map(s => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.roomNumber}</td>
                <td>{s.department}</td>
                <td>{s.year}</td>
                <td>{s.phone}</td>
                <td>
                  <button onClick={() => handleDelete(s._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
