
import {Subject, Student, Exam} from "./enteties.js"


var exams = [];
document.querySelector(".add").addEventListener("click", function () {
  collectsData();
});

function collectsData() {
  var select = document.querySelector("select");
  var subjectOptions = select.options[select.selectedIndex].value; //java script
  var name = document.querySelector(".name").value.trim(); //dijana
  var grade = document.querySelector(".grade").value.trim(); // 8
  var error = document.querySelector(".subject-error"); //All fields are required

  var passed = document.querySelector(".passedFinish");
  var failed = document.querySelector(".failedFinish");
  var countPassed = document.getElementById("passed");
  var countFailed = document.getElementById("failed");

  //   Validation
  var isValid = subjectOptions && name && grade;

  if (!isValid) {
    error.textContent = "All fields are required";
    return false;
  }
  if (isValid) {
    error.textContent = "";
  }
  if (name.split(" ").length == 1) {
    alert("miss surname");
    return false;
  }
  // var n = name.replace(/\s+/g, " ");//REPLACE SPACE
  var firstWord = name.split(/[\s,]+/)[0];
  var secondWord = name.split(/[\s,]+/)[1];
  var firstl = firstWord.slice(0, 1);
  var secondLetter = secondWord.slice(0,1);

  if (firstl !== firstl.toUpperCase()) {
    error.textContent = "name should be start with capitals.";
    return false;
  } else if (secondLetter !== secondLetter.toUpperCase()) {
    return (error.textContent = " surname should be start with capitals.");
  }

  var regex = /^[a-zA-Z\s]+$/; //letter and space
  if (!name.match(regex)) {
    // alert("Must be string ")
    error.textContent = "Name must be string";
    return false;
  }

  if (isNaN(grade)) {
    error.textContent = "Grade must be number";
    return false;
  } else if (grade > 10 || grade < 5) {
    error.textContent = "Grade must be number from 5-10";
    return false;
  }

  var subject = new Subject(subjectOptions);
  var studentObject = new Student(name);
  var ExamObject = new Exam(subject, studentObject, grade);
  exams.push(ExamObject);

  var passedExam = 0;
  var failedExam = 0;
  var percentage = 1;

  for (var i = 0; i < exams.length; i++) {
    var listPassed = document.createElement("ul");
    var listFailed = document.createElement("ul");
    var exam = exams[i];

    if (exam.grade > 5) {
      passedExam++;
      listPassed.innerHTML =`<li>${exam.getExamInfo()} <span>${parseInt(exam.grade)}</span></li>`;
    } else {
      failedExam++;
      percentage = (failedExam / exams.length) * 100;
      listFailed.innerHTML =`<li>${exam.getExamInfo()} <span>${parseInt(exam.grade)}</span></li>`;
    }
  }

  passed.appendChild(listPassed);
  failed.appendChild(listFailed);
  countPassed.innerHTML = "PASSED" + "<span>" + passedExam + "</span>";
  countFailed.innerHTML = `FAILED<span>${percentage.toFixed(2)}%</span><span>${failedExam}</span>`;
}


export{collectsData}