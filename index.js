let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// "We are interested in retrieving only the students' names; all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']"
studentRecords.map((ele) => {
  console.log(ele.name.toUpperCase());
});

// "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"
studentRecords.map((ele) => {
  if (ele.marks > 50) {
    console.log(ele);
  }
  // console.log(ele.name.toUpperCase());
});
