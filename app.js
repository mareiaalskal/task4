const systemTitle = "Users Management System";

let activeAdmin = "Maria";
let activeAdminAge = 23;

const userName = "Maria";
const userAge = 23;
const userEmail = "maria@gmail.com";
const userCountry = "Syria";
const userSkills = ["HTML", "CSS"];

const users = [
  {
    name: "Maria",
    age: 23,
    email: "maria@gmail.com",
    country: "Syria",
    skills: ["HTML", "CSS"],
  },
  {
    name: "Ahmad",
    age: 27,
    email: "ahmad@gmail.com",
    country: "Jordan",
    skills: ["JavaScript", "React"],
  },
  {
    name: "Sara",
    age: 21,
    email: "sara@gmail.com",
    country: "Syria",
    skills: ["Flutter", "Dart"],
  },
  {
    name: "Omar",
    age: 30,
    email: "omar@gmail.com",
    country: "Egypt",
    skills: ["Python", "Java"],
  },
  {
    name: "Lina",
    age: 25,
    email: "lina@gmail.com",
    country: "Jordan",
    skills: ["React", "CSS"],
  },
];

function findUserByName(userList, targetName) {
  return userList.find(
    (user) => user.name.toLowerCase() === targetName.toLowerCase(),
  );
}

console.log("Find Maria:", findUserByName(users, "Maria"));

function filterUsersByCountry(userList, targetCountry) {
  return userList.filter(
    (user) => user.country.toLowerCase() === targetCountry.toLowerCase(),
  );
}

console.log("Users in Syria:", filterUsersByCountry(users, "Syria"));

function sortUsersByAge(userList) {
  return [...userList].sort((a, b) => a.age - b.age);
}

console.log("Sorted by age:", sortUsersByAge(users));

function getAllUserNames(userList) {
  return userList.map((user) => user.name);
}

console.log("All names:", getAllUserNames(users));

function calculateAverageAge(userList) {
  if (userList.length === 0) return 0;
  const totalAge = userList.reduce((sum, user) => sum + user.age, 0);
  return totalAge / userList.length;
}

console.log("Average age:", calculateAverageAge(users));

function addUser(userList, newUser) {
  return [...userList, newUser];
}

const afterAdd = addUser(users, {
  name: "Nour",
  age: 25,
  email: "nour@example.com",
  country: "Jordan",
  skills: ["Flutter", "Dart"],
});
console.log("After Add:", afterAdd);

function updateUserByName(userList, targetName, updatedFields) {
  return userList.map((user) =>
    user.name.toLowerCase() === targetName.toLowerCase()
      ? { ...user, ...updatedFields }
      : user,
  );
}

const afterUpdate = updateUserByName(afterAdd, "Omar", {
  age: 22,
  country: "UAE",
});
console.log("After Update:", afterUpdate);

function deleteUserByName(userList, targetName) {
  return userList.filter(
    (user) => user.name.toLowerCase() !== targetName.toLowerCase(),
  );
}

const afterDelete = deleteUserByName(afterUpdate, "Sara");
console.log("After Delete:", afterDelete);
