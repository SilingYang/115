//import Person from "../../src/practice_2/person.js";
const Person = require("../../src/practice_2/person.js");
function Student(name,age,cla){
    Person.apply(this,arguments);
    this.class=cla;
}


let F = function(){};
F.prototype = Person.prototype;
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
    return "I am a Student. I am at Class "+ this.class +".";
}

module.exports = Student;