export class Course {
    constructor(nameOfCourse,listOfStudent=[]){
        this.nameOfCourse = nameOfCourse;
        this.listOfStudent = [...listOfStudent];
    }

    add(student){
        if (this.listOfStudent.includes(student)){
            console.log("The student is already in this course")
        } else {
            this.listOfStudent.push(student);
            console.log("Студента успішно підключено до курсу");
                if (Array.isArray(student.listOfCourse)){
                student.listOfCourse.push(this);
                console.log("У студента цей курс додався до активних");
                }
        }
    }
}