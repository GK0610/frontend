import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    try {
      await deleteEmployee(employeeId);
      fetchEmployees(); // Fetch updated employee list after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add-employee">Add Employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {/* Employee details */}
            <Link to={`/edit-employee/${employee._id}`}>Edit</Link>
            <button onClick={() => handleDeleteEmployee(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
