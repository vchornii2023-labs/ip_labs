import {Person} from "./Person.js";
export class Student extends Person{
    constructor(listOfCourse=[],name){
    super(name);
    this.listOfCourse = listOfCourse;
    }
    showCourse() {
        for(let i=0; this.listOfCourse[i]!=undefined; i++){
            console.log(`Студент є в курсі ${this.listOfCourse[i].nameOfCourse}`)
        }
    }
}