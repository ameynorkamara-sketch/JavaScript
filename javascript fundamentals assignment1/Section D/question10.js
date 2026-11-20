//Nested Objects, Arrays & Template Literal Formatting
let hotelRoom = {
    location: "Aberdeen",
    pricePerNight: 500,
    guestName: "Foday",
    nights: 3,
    amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],
    bathroom: {
        count: 1,
        hasJacuzzi: true
    }
};

console.log(hotelRoom.amenities);
console.log(hotelRoom.bathroom.hasJacuzzi);

let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;

console.log(`BOOKING SUMMARY
Guest: ${hotelRoom.guestName}
Location: ${hotelRoom.location}
Number of nights: ${hotelRoom.nights}
Total bill: ${totalBill}`);
