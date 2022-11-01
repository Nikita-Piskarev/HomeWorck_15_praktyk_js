"use strict";
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
function sumNumbbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные, id.

const student = {
  name: "Nikita",
  firstName: "Piskarev",
  gender: "men",
  namber: 9777777,
  id: 9876,
};

// 2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры

const group = {
  university: "Zpa Universitet",
  faculty: "Metals",
  department: "Svarca metall",
};

// 2.3 Связать обьект студента с обьектом его группы
const map = new Map([[student, group]]);
console.log(map);

// 2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. Функция должна принимать обьект студента

function returnInfo(user) {
  let arrInfoStudent = [];
  let strInfoStudent = "";
  for (const [key, value] of map) {
    if (user === key) {
      console.log(value, key);
      for (const [key, info] of Object.entries(value)) {
        arrInfoStudent.push(`${key} - ${info}.`);
        strInfoStudent += `${key} - ${info}. `;
      }
      for (const [keys, info] of Object.entries(key)) {
        arrInfoStudent.push(`${keys} - ${info}.`);
        strInfoStudent += `${keys} - ${info}. `;
      }
    }
  }
  // return arrInfoStudent; ///вывожу масив в который содержит масивы ключ ии значение
  return `${strInfoStudent.trim()}`; // вывожу строку без первого и последнего пробелла
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.

const array = [
  1, 13, 23, 0, 45, 0, 0, 34, -12, -34, 45, 76, 87, 324, 65, 45, 0, 67, -67, 34,
  55, 1, -1, 0, 45,
];

// // 3.2 Вывести элементы с четными индексами
for (let index = 0; index < array.length; index++) {
  if (index % 2 === 0) {
    console.log(array[index]);
  }
}

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
for (const value of array) {
  if (value % 2 === 0) {
    console.log(value);
  }
}

// 3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    console.log(i);
  }
}

// 3.5 Подсчитать количество отрицательных чисел в массиве
// let negativeNum = 0;

// for (const value of array) {
//   if (value < 0) {
//     negativeNum += 1;
//   }
// }
// console.log(negativeNum);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(autor, name, ear, publishing) {
    this.autor = autor;
    this.name = name;
    this.ear = ear;
    this.publishing = publishing;
  }
}

const book = new Book("vasa", "gore", 1998, "Ukrania");
class ElectroBook extends Book {
  constructor(autor, name, ear, publishing, format, elNum) {
    super(autor, name, ear, publishing);
    this.format = format;
    this.elNum = elNum;
  }
}
const elBook = new ElectroBook(
  "peta",
  "Mymy",
  2324,
  " Ukrania",
  "jhsb20",
  4542
);

// 5
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function numberReplacement(num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }
}

// 6
// С сервера передается обьект, имеющий следующую структуру:
// const serverResponse = {
//     data: {
//         data: [
//             {
//                 id: 0,
//                 name: 'John',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 1,
//                 name: 'Jane',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 2,
//                 name: 'Admin',
//                 lastName: 'Tiranovich'
//             },
//             {
//                 id: 3,
//                 name: 'User',
//                 lastName: 'Undefinovich'
//             },
//         ]
//     }
// }

// С помощью деструктуризации:
// - создать переменную users на основании массива в обьекте serverResponse
// - создать отдельные переменные для 3 и 4 пользователя

const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};

const {
  data: {
    data: [...users],
  },
  data: {
    data: [, , user3, user4],
  },
} = serverResponse;

console.log(users); //все юзеры
console.log(user3, user4);// 3,4 юзеры
