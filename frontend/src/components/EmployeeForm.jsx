import { useEffect, useState } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";

function EmployeeForm({ selectedEmployee, onSave }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee.id) {
      updateEmployee(employee.id, employee)
        .then(() => {
          alert("Employee updated successfully");
          onSave();
        })
        .catch(() => alert("Update failed"));
    } else {
      createEmployee(employee)
        .then(() => {
          alert("Employee added successfully");
          onSave();
        })
        .catch(() => alert("Add failed"));
    }

    setEmployee({
      name: "",
      email: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{employee.id ? "Update Employee" : "Add Employee"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">
          {employee.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
