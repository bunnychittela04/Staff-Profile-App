🧑‍💼 Staff Profile Management App
A full-stack MERN (MongoDB, Express, React, Node.js) application for managing staff profiles using a multi-step form. The final profile summary displays personal, address, banking, and system access information in a clean and modern layout.

📦 Tech Stack

Frontend: React  + Tailwind CSS  

Backend: Node.js + Express.js

Database: MongoDB (Local or Atlas)

Tools: Axios, React Router DOM



Step 1 – Basic Info
→ Staff code, name, email, phone, DOB, workplace, job details, etc.

Step 2 – Related Details
→ Address, nationality, banking, religion, etc.

Step 3 – System & Communication
→ Role, LinkedIn, Facebook, EPF, Twilio, etc.

Summary Page
→ Full profile display with round photo, icons for Gmail, phone, academic, role, manager.

📁 Folder Structure

frontend/
├── src/
│ ├── components/
│ │ ├── Step1BasicInfo.jsx
│ │ ├── Step2RelatedInfo.jsx
│ │ ├── Step3SystemInfo.jsx
│ │ └── SummaryPage.jsx
│ ├── App.jsx
│ ├── index.js
│ └── styles/
│ └── SummaryPage.css
└── vite.config.js

backend/
├── models/
│ └── Staff.js
├── routes/
│ └── staffRoutes.js
├── server.js
└── config/
└── db.js

🔧 Installation

Clone the Repository

git clone https://github.com/your-username/staff-profile-app.git
cd staff-profile-app

Install Dependencies

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install

Set Up Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/staffdb

Run MongoDB 

Make sure MongoDB is running:

mongod

Start the Servers

Backend:

cd backend
npm run dev

Frontend:

cd frontend
npm run dev

 Features

 Multi-step Form Wizard (3 pages)
 Data stored to MongoDB
 Summary page with round photo + social/contact icons
 Uses FontAwesome for profile visuals
 Modern card layout

 API Endpoints

POST /api/staff
Create a new staff profile

GET /api/staff/:id
Fetch staff profile by ID

 Sample Data

{
"staffCode": "ST12345",
"firstName": "Amara",
"lastName": "Nageswararao Chittela",
"email": "bunnychittela55@gmail.com",
"phone": "9392526314",
"birthday": "2003-12-02",
"gender": "Male",
"workplace": "Bangalore",
"status": "single",
"jobPosition": "Software Engineer",
"academicLevel": "B.tech",
"hourlyRate": 800,
"religion": "Hindhu",
"nation": "indian",
"maritalStatus": "single",
"citizenID": "ST12345678",
"dateOfIssue": "2010-12-09",
"placeOfBirth": "Guntur",
"currentAddress": "123 Street, BLR",
"bankAccountNo": "HDFS",
"bankAccountName": "HDFC Bank",
"bankName": "HDFC Bank",
"personalTaxCode": "PANCODE1234",
"role": "Web Developer",
"emailSignature": "amara.dev",
"linkedIn": "amara",
"facebook": "nageswararao",
"skype": "amara.skype",
"epfNo": "EPF0001",
"socialSecurityNo": "SSN0001",
"twilioPhone": "+91 00000 00000",
"twilioWhatsapp": "yes",
"directManager": "Team Lead"
}

Profile Summary Layout

Round profile image

Name

Gmail, phone, university, occupation, direct manager

Icons: Facebook, LinkedIn, Skype

💡 Future Improvements

Image upload for profile picture

Edit/Delete staff profiles

Validation + error messages

Login and role-based access
