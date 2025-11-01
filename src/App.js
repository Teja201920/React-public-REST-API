import React from "react";

function Students() {
  const studentData = [
    { rollNo: "CSE01", name: "Tejaswarrao", department: "CSE", marks: 92 },
    { rollNo: "CSE02", name: "Prasanna", department: "CSE", marks: 89 },
    { rollNo: "CSE03", name: "Sai Teja", department: "CSE", marks: 85 },
    { rollNo: "CSE04", name: "Abhishek", department: "CSE", marks: 90 },
    { rollNo: "CSE05", name: "Dhilli Rao", department: "CSE", marks: 88 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Student Information</h2>
      <table border="1" cellPadding="10" align="center">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
