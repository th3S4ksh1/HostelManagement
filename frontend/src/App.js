import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hostel Management System</h1>
      <StudentForm onStudentAdded={() => setRefresh(!refresh)} />
      <StudentList key={refresh} />
    </div>
  );
}

export default App;
