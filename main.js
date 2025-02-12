'use strict';

import { Human } from "./human.js";
import { Apartment } from "./apartment.js";
import { House } from "./house.js";

/*
#1
Усі класи розкласти по своїм файлам і імпортувати! Наприклад, клас Human має бути в окремому файлі Human.js

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.



b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/


// Create instances of Human
const person1 = new Human("Alice", "female");
const person2 = new Human("Bob", "male");
const person3 = new Human("Charlie", "male");
const person4 = new Human("Diana", "female");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);


// Create instances of Apartment
const apartment1 = new Apartment();
const apartment2 = new Apartment();


// Add instances of Human to instances of Apartment
apartment1.addCitizen(person1);
apartment1.addCitizen(person2);
apartment2.addCitizen(person3);
apartment2.addCitizen(person4);


// Create an instance of House with a maximum of 5 flats
const house = new House(5); // <--- I can modify it here

// Add instances of Apartment to the instance of House
house.addFlat(apartment1);
house.addFlat(apartment2);


// Output
console.log(house.toString());


