import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";

function EmployeeList({ refresh, onEdit }) {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = () => {
    getAllEmployees().then((res) => setEmployees(res.data));
  };

  useEffect(() => {
    loadEmployees();
  }, [refresh]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this employee?")) {
      deleteEmployee(id).then(loadEmployees);
    }
  };

  return (<><table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  </thead>
    <tbody>
  {employees.length === 0 ? (
    <tr>
      <td colSpan="5" className="empty-state">
        No employees yet. Add your first employee above.
      </td>
    </tr>
  ) : (
    employees.map((e) => (
      
      <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.department}</td>
        <td>{e.salary}</td>
        <td>
          <button className="action-btn edit-btn" onClick={() => onEdit(e)}>
            Edit
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => handleDelete(e.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

 </table>
  </>);
}

export default EmployeeList;
