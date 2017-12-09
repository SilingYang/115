import Person from "../../src/practice_3/person.js";

function Student(name,age,cla){
    Person.apply(this,arguments);
    //this.name=name;
    //this.age=age;
    this.klass=cla;
}
Student.prototype.introduce = function(){
    return "I am a Student. I am at Class "+ this.klass +".";
}
module.exports = Student;