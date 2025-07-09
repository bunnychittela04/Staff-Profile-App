import React from 'react';
import './SummaryPage.css';

const SummaryPage = ({ formData }) => {
  const {
    staffCode, firstName, lastName, email, phone, birthday, gender, workplace, status,
    jobPosition, academicLevel, hourlyRate,
    domicile, maritalStatus, currentAddress, nation, placeOfBirth, religion,
    citizenID, dateOfIssue, placeOfIssue, resident,
    bankAccountNo, bankAccountName, bankName, personalTaxCode,
    role, emailSignature, linkedIn, facebook, skype,
    epfNo, socialSecurityNo, twilioPhone, twilioWhatsapp,
    university, designation, managerName
  } = formData;

  return (
    <div className="summary-wrapper">
      <div className="summary-left">
        <div className="profile-card">
          <div className="profile-image" />
          <h2>{firstName} {lastName}</h2>
          <div className="social-icons">
            <span title="Facebook">📘</span>
            <span title="LinkedIn">💼</span>
            <span title="Skype">💬</span>
            <span title="Email">📧</span>
          </div>
        </div>

        <div className="details-card">
          <p>📧 {email}</p>
          <p>📞 {phone}</p>
          <p>🎓 {university}</p>
          <p>{designation}</p>
          <p><strong>Direct manager:</strong> {managerName || <span className="manager-icon">👤</span>}</p>
        </div>
      </div>

      <div className="summary-right">
        <div className="info-section">
          <h3>General information</h3>
          <table>
            <tbody>
              <tr><td>Staff code</td><td>{staffCode}</td></tr>
              <tr><td>Staff name</td><td>{firstName} {lastName}</td></tr>
              <tr><td>Gender</td><td>{gender}</td></tr>
              <tr><td>Birthday</td><td>{birthday}</td></tr>
              <tr><td>Phone</td><td>{phone}</td></tr>
              <tr><td>Workplace</td><td>{workplace}</td></tr>
              <tr><td>Status</td><td>{status}</td></tr>
              <tr><td>Job position</td><td>{jobPosition}</td></tr>
              <tr><td>Academic level</td><td>{academicLevel}</td></tr>
              <tr><td>Hourly Rate</td><td>₹{hourlyRate}</td></tr>
              <tr><td>Religion</td><td>{religion}</td></tr>
              <tr><td>Nation</td><td>{nation}</td></tr>
              <tr><td>Marital status</td><td>{maritalStatus}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-section">
          <h3>Related information</h3>
          <table>
            <tbody>
              <tr><td>Citizen identification</td><td>{citizenID}</td></tr>
              <tr><td>Date of issue</td><td>{dateOfIssue}</td></tr>
              <tr><td>Place of birth</td><td>{placeOfBirth}</td></tr>
              <tr><td>Current address</td><td>{currentAddress}</td></tr>
              <tr><td>Bank account number</td><td>{bankAccountNo}</td></tr>
              <tr><td>Bank account name</td><td>{bankAccountName}</td></tr>
              <tr><td>Bank name</td><td>{bankName}</td></tr>
              <tr><td>Personal tax code</td><td>{personalTaxCode}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
