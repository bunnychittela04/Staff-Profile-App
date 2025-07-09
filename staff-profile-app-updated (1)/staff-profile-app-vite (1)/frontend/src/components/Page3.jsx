import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/summary');
  };

  return (
    <div>
      <h2>Staff Profile - System & Communication</h2>
      <input name="role" placeholder="Role" onChange={handleChange} /><br/>
      <input name="emailSignature" placeholder="Email Signature" onChange={handleChange} /><br/>
      <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} /><br/>
      <input name="facebook" placeholder="Facebook" onChange={handleChange} /><br/>
      <input name="skype" placeholder="Skype" onChange={handleChange} /><br/>
      <input name="epfNo" placeholder="EPF No" onChange={handleChange} /><br/>
      <input name="socialSecurityNo" placeholder="Social Security No" onChange={handleChange} /><br/>
      <input name="twilioPhone" placeholder="Twilio Phone Number" onChange={handleChange} /><br/>
      <input name="twilioWhatsapp" placeholder="Is Twilio WhatsApp Enabled?" onChange={handleChange} /><br/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>
      <button onClick={handleNext}>Finish</button>
    </div>
  );
};

export default Page3;
