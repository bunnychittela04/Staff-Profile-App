import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/page2');
  };

  return (
    <div>
      <h2>Staff Profile - Basic Info</h2>
      <input name="staffCode" placeholder="Staff code" onChange={handleChange} /><br/>
      <input name="firstName" placeholder="First name" onChange={handleChange} /><br/>
      <input name="lastName" placeholder="Last name" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="phone" placeholder="Phone" onChange={handleChange} /><br/>
      <input name="birthday" type="date" placeholder="Birthday" onChange={handleChange} /><br/>
      <input name="gender" placeholder="Gender" onChange={handleChange} /><br/>
      <input name="workplace" placeholder="Workplace" onChange={handleChange} /><br/>
      <input name="status" placeholder="Status" onChange={handleChange} /><br/>
      <input name="jobPosition" placeholder="Job Position" onChange={handleChange} /><br/>
      <input name="academicLevel" placeholder="Academic Level" onChange={handleChange} /><br/>
      <input name="hourlyRate" type="number" placeholder="Hourly Rate" onChange={handleChange} /><br/>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Page1;
