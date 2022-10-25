import { Person } from "./q0.js";

export class Student extends Person {
  constructor(firstName, lastName, grade, age) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
}
