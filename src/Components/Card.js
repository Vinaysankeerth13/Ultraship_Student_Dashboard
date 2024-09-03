import React from 'react';

const Card = ({ student, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="w-auto bg-lightBeige rounded-lg shadow-md overflow-hidden p-2 m-2 cursor-pointer flex flex-col justify-between relative"
    >
      <div className="flex mb-4">
        <img
          src={student.profilePicture}
          alt={`${student.name}'s profile`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
          <p className="text-gray-900">Age: {student.age}</p>
          <p className="text-gray-900">Grade: {student.grade}</p>
          <p className="text-gray-900">
            Subjects: {student.subjects.join(', ')}
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-auto">
        <button className="bg-black text-white px-2 py-1 rounded hover:text-blue-600">
          Edit
        </button>
        <button className="bg-black text-white px-2 py-1 rounded hover:text-yellow-600">
          Flag
        </button>
        <button className="bg-black text-white px-2 py-1 rounded hover:text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

