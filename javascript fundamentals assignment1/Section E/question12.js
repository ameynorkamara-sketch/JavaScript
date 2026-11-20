//Mixed Data Types & Nested Array/Object Access
let studentProfile = { name: "Foday", age: 34 };

let records = [
    "DICT Department",
    2026,
    true,
    null,
    { name: "Samuel", age: 67 },
    studentProfile,
    ["Cassava", "Plantain", "Mango"]
];

console.log(records[4].name);
console.log(records[5].age);  
console.log(records[6][1]);   
