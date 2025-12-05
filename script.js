const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here
const team = players;        // Same reference as players
const team1 = [...players];  // New copy of the array
const cap1 = { ...person };  // New copy of the object

// Make variables available to Cypress
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
