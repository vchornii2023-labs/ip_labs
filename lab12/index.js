import {Person} from "./models/Person.js";
import {Student} from "./models/Student.js";
import {Teacher} from "./models/Teacher.js";
import {Course} from "./models/Course.js";

let student1 = new Student([],"Misha");
let student2 = new Student([],"Sasha");
let student3 = new Student([],"Volodia");

let course1 = new Course("KI");
let course2 = new Course("KN");
let course3 = new Course("MT");
let course4 = new Course("SI");

let teacher1 = new Teacher([],"Ivan");
let teacher2 = new Teacher([],"Oleg");

//Вчитель додає курс до свого профілю.
teacher1.add(course1);
teacher1.add(course2);
teacher2.add(course3);
teacher2.add(course4);
//Далі студенти додаються до курсу
course1.add(student1);
course1.add(student2);

course3.add(student3);

console.log(teacher1);
console.log(teacher1.listOfCourse);
console.log(teacher1.listOfCourse[0]);

console.log(student1.listOfCourse);
console.log(student2.listOfCourse);

console.log(teacher1.get());
student1.showCourse();
student2.showCourse();
student3.showCourse();
