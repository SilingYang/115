
//import Person from "../../src/practice_4/person.js";
const Person = require("../../src/practice_4/person.js");

function Student(name,age,cla){
    //Person.apply(this,arguments);
    this.klass=cla;
}
function extend(Child, Parent) {
    　　　　var p = Parent.prototype;
    　　　　var c = Child.prototype;
    　　　　for (var i in p) {
    　　　　　　c[i] = p[i];
    　　　　　　}
    　　　　c.uber = p;
}

/*let F = function(){};
F.prototype = Person.prototype;
Student.prototype.constructor = Student;*/
extend(Student,Person);
Student.prototype.introduce = function(){
    return "My name is "+this.name +". "+"I am "+this.age+" years old. "+"I am a Student. I am at Class "+ this.class +".";
}

module.exports = Student;