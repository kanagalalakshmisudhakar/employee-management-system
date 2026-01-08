import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const refreshEmployees = () => {
    setRefresh(!refresh);
    setSelectedEmployee(null);
  };

  return (
  <div className="app-container">
    <h1>Employee Management System</h1>

    <div className="section-card">
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onSave={refreshEmployees}
      />
    </div>

    <div className="section-card">
      <EmployeeList
        refresh={refresh}
        onEdit={setSelectedEmployee}
      />
    </div>
  </div>
);


}

export default App;
