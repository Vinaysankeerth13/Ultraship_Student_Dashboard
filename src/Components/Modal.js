import React from 'react';

const Modal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0.5 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-md">
      <div className="bg-lightBeige rounded-md shadow-lg max-h-full w-full max-w-4xl p-6 relative top-5 bottom-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <div className="flex items-center mb-6">
          <img
            src={student.profilePicture}
            alt={`${student.name}'s profile`}
            className="w-24 h-24 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-gray-700">Age: {student.age}</p>
            <p className="text-gray-700">Gender: {student.gender}</p>
            <p className="text-gray-700">Grade: {student.grade}</p>
            <p className="text-gray-700">Enrollment Date: {student.enrollmentDate}</p>
            <p className="text-gray-700">Attendance: {student.attendancePercentage}%</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Subjects</h3>
          <ul className="list-disc list-inside pl-5">
            {student.subjects.map((subject, idx) => (
              <li key={idx} className="text-gray-700">{subject}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-700">Email: {student.contact.email}</p>
          <p className="text-gray-700">Phone: {student.contact.phone}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-700">Street: {student.address.street}</p>
          <p className="text-gray-700">City: {student.address.city}</p>
          <p className="text-gray-700">State: {student.address.state}</p>
          <p className="text-gray-700">ZIP: {student.address.zip}</p>
          <p className="text-gray-700">Country: {student.address.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
