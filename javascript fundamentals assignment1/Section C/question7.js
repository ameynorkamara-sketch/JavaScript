// Authentication Check
let registeredEmail = "student@example.com";
let registeredPassword = "2026";

let enteredEmail = "student@example.com";
let enteredPassword = "2026";

if (enteredEmail === registeredEmail && enteredPassword === registeredPassword) {
    console.log("Access Granted: Welcome to the Student Portal");
} else {
    console.log("Access Denied: Invalid email or password");
}
