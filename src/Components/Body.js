import React, {useState} from "react";
import Card from "./Card";
import students from "../Utils/data";
import Modal from "./Modal";

const Body = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    const handleCardClick = (student) => {
      setSelectedStudent(student);
    };
  
    const handleCloseModal = () => {
      setSelectedStudent(null);
    };
  
    return (
      <div className="bg-black grid grid-cols-3 relative p-10">
        {students.map((student) => (
          <Card key={student.id} student={student} onClick={() => handleCardClick(student)} />
        ))}
  
        {selectedStudent && (
          <Modal student={selectedStudent} onClose={handleCloseModal} />
        )}
      </div>
    );
  };
  
  export default Body;