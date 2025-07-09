import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/page3');
  };

  return (
    <div>
      <h2>Staff Profile - Related Information</h2>
      <input name="domicile" placeholder="Domicile" onChange={handleChange} /><br/>
      <input name="maritalStatus" placeholder="Marital Status" onChange={handleChange} /><br/>
      <input name="currentAddress" placeholder="Current Address" onChange={handleChange} /><br/>
      <input name="nation" placeholder="Nation" onChange={handleChange} /><br/>
      <input name="placeOfBirth" placeholder="Place of Birth" onChange={handleChange} /><br/>
      <input name="religion" placeholder="Religion" onChange={handleChange} /><br/>
      <input name="citizenId" placeholder="Citizen Identification" onChange={handleChange} /><br/>
      <input name="dateOfIssue" type="date" placeholder="Date of Issue" onChange={handleChange} /><br/>
      <input name="placeOfIssue" placeholder="Place of Issue" onChange={handleChange} /><br/>
      <input name="resident" placeholder="Resident" onChange={handleChange} /><br/>
      <input name="bankAccountNumber" placeholder="Bank Account Number" onChange={handleChange} /><br/>
      <input name="bankAccountName" placeholder="Bank Account Name" onChange={handleChange} /><br/>
      <input name="bankName" placeholder="Bank Name" onChange={handleChange} /><br/>
      <input name="personalTaxCode" placeholder="Personal Tax Code" onChange={handleChange} /><br/>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Page2;
