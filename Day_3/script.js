"use strict";

// Create your own resume data in JSON format
var resume = {
  my_Name: "Arun kumar",
  Email: "arungnaneshwaran@gmail.com",
  Date_of_birth: "22-12-1996",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 25,
  Marks: { "B.E": "CGPA 9.35", "Higher secondary": "92%", "SSLC": "96%" },
  Qualification: "B.E ECE",
  Years_of_Experience: 3,
  Software_proficiency: [
    "Python",
    "C",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
  ],
  Skills: ["Teamwork", "Communication", "Problem Solving"],
  Hobbies: ["Cricket", "Reading", "Watching movies"],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "Arun kumar",
  Email: "arungnaneshwaran@gmail.com",
  Date_of_birth: "22-12-1996",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 25,
  Marks: { "B.E": "CGPA 9.35", "Higher secondary": "92%", "SSLC": "96%" },
};
const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}