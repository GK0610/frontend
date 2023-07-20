import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { createEmployee } from '../../services/api';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleCreateEmployee = async () => {
    const newEmployee = {
      name,
      designation,
      location,
      salary,
    };
    try {
      const response = await createEmployee(newEmployee);
      console.log('Employee created:', response.data);
      // Reset the form
      setName('');
      setDesignation('');
      setLocation('');
      setSalary('');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Create Employee</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleCreateEmployee}>
        Create
      </Button>
    </div>
  );
};

export default EmployeeForm;
