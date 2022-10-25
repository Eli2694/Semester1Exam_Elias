export class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  printName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
  printAge() {
    console.log(`My age is ${this.age} `);
  }
}

// class Student extends Person {
//   constructor(firstName, lastName, grade, age) {
//     super(firstName, lastName, age);
//     this.grade = grade;
//   }
// }
