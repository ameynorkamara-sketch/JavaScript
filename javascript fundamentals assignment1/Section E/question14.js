//Building an Array of Objects (Database Simulation)
let lecturersDb = [];

lecturersDb.push(
    {
        id: 1,
        fullName: "Amadu Kamara",
        department: "DICT",
        phoneNumber: "076123456"
    },
    {
        id: 2,
        fullName: "Ameynor Kamara",
        department: "Computer Science",
        phoneNumber: "077234567"
    },
    {
        id: 3,
        fullName: "Foday Bangura",
        department: "Networking",
        phoneNumber: "088345678"
    }
);

console.log("Lecturers database:", lecturersDb);


let secondLecturer = lecturersDb[1];
console.log(`Name: ${secondLecturer.fullName}, Phone: ${secondLecturer.phoneNumber}`);
