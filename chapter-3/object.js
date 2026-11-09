// // JS - OBJECT
// const student = {
//     firstName: "Mohamed",
//     lastName: "Kargbo",
//     age: 29,
//     walk: true,
//     girlfriend: false,
//     university: "Limkokwing",
//     program: "B.S.E.M",
//     occupation: "Web Designer",
//     photo: "https://www.pixabay.com/mohamed-pic-002",
//     website:"https://mohamed-kargbo.netlify.app/"
// }
// // print the object
// console.log(student)

// //Accessing a property of an object 
// console.log(student.photo)

// // UPDATING AN ATTRIBUTE IN AN OBJECT
// student.occupation = "Website Designer"
// consol.log(student)

// // Adding a new property to the object
// student.gender = "Male"
// console.log(student)

//Classwork 
// create an object for a citizen(at least 5 crucial infos) and print them to the console in an ID card format using the JS template Literal


//  object for a citizen
const citizen = {
    firstName: "Ameymor",
    lastName: "Kamara",
    age: 19,
    gender: "Female",
    nationality: "Sierra Leonean",
    occupation: "Web Designer",
    address: "Freetown, Sierra Leone",
    IDNumber: "SL20260025"
};


console.log(`
====================================
         CITIZEN ID CARD
====================================
First Name:    ${citizen.firstName}
Last Name:     ${citizen.lastName}
Age:           ${citizen.age}
Gender:        ${citizen.gender}
Nationality:   ${citizen.nationality}
Occupation:    ${citizen.occupation}
Address:       ${citizen.address}
ID Number:     ${citizen.IDNumber}
====================================
       REPUBLIC OF SIERRA LEONE
====================================
`);


const house = {
    location: "Lumbley",
    numberOfrooms: 4,
    parlour: 2,
    bathrooms: 5,
    owner: "Ameynor Kamara",
    prcePernights: 100,
    facilities: [ "Internt" ,"One Moblie - wifi", "Kitchen",
        "TV", "Catr Park", "Dryer", "Pool", "Beach Access" ,"No Smoking" ,"No Pet"],
 appartment: {
            name: "Block D appartments",
            numberOfRooms: 2,
            gamingTV: 1
        }
}

console.log(house)
