import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const fetchStudents = () => axios.get(API_URL);
export const addStudent = (student) => axios.post(API_URL, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
