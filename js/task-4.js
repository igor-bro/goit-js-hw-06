"use strick";

//Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

console.log("Task 4");

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);

const allUsersTask4 = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allUsersTask4, "male")); // 12053

console.log(getTotalBalanceByGender(allUsersTask4, "female")); // 8863
