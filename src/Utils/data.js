const students = Array.from({ length: 50 }, (_, index) => ({
    id: (index + 1).toString(),
    name: `Student ${index + 1}`,
    age: 18 + (index % 10),
    gender: Math.random() > 0.5 ? "Male" : "Female",
    grade: ["A", "B", "C", "D", "E"][Math.floor(Math.random() * 5)],
    subjects: [
      "Mathematics",
      "Science",
      "History",
      "Literature",
      "Computer Science"
    ].slice(0, Math.floor(Math.random() * 5) + 1),
    profilePicture: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${index + 1}.jpg`,
    contact: {
      email: `student${index + 1}@example.com`,
      phone: `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`
    },
    address: {
      street: `${Math.floor(Math.random() * 1000)} Random Street`,
      city: `City ${index + 1}`,
      state: ["CA", "TX", "NY", "FL", "IL"][Math.floor(Math.random() * 5)],
      zip: `${Math.floor(Math.random() * 90000) + 10000}`,
      country: "USA"
    },
    enrollmentDate: `202${Math.floor(Math.random() * 4) + 1}-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`,
    attendancePercentage: Math.floor(Math.random() * 30) + 70,
    extraCurriculars: [
      "Basketball",
      "Drama Club",
      "Chess Club",
      "Coding Club",
      "Music Band"
    ].slice(0, Math.floor(Math.random() * 5) + 1),
    bio: `Student ${index + 1} is involved in various activities and shows a strong interest in academics and extra-curricular activities.`
  }));
  
  export default students;
  