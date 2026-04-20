import {Person} from "./Person.js";
export class Teacher extends Person {
    constructor(listOfCourse = [], name){
    super(name);
    this.listOfCourse = [...listOfCourse];
}
    add(course){
        this.listOfCourse.push(course);
        console.log("Курс був успішно наданий");
    }
}
