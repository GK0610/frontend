import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import { deleteEmployee } from '../../services/api';

const EmployeeItem = ({ employee, handleDeleteEmployee }) => {
  const handleDelete = async () => {
    try {
      await deleteEmployee(employee._id);
      handleDeleteEmployee(employee._id);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <TableRow key={employee._id}>
      <TableCell>{employee.name}</TableCell>
      <TableCell>{employee.designation}</TableCell>
      <TableCell>{employee.location}</TableCell>
      <TableCell>{employee.salary}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EmployeeItem;
