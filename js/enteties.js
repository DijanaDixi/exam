class Student{
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    getStudentData() {
      return `${this.name} ${this.surname}`;
    }
  }
  
  
  class Subject {
    constructor(name) {
      this.name = name;
    }
    getSubjectName() {
      return this.name;
    }
  }
  
  class Exam {
    constructor(subject, student, grade) {
      this.subject = subject;
      this.student = student;
      this.grade = grade;
    }
    getExamInfo() {
      return (
        `${this.subject.getSubjectName()} ${this.student.getStudentData()}` 
       
      
      );
    }
    hasPassed() {
      if (this.grade > 5) {
        return "passed";
      } else {
        return "failed";
      }
    }
  }
  var subject = new Subject("javaScript");
  console.log(subject)

  var student = new Student("Milos", "Stankovic");
  console.log(student)


  var exam = new Exam(subject, student, 9);
  console.log(exam.getExamInfo())
  

  export {Student,Subject,Exam}