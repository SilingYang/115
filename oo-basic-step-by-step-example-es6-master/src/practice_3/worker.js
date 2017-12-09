import Person from "../../src/practice_3/person.js";

function Worker(name,age){
    Person.apply(this,arguments);
    //this.name=name;
    //this.age=age;
}
Worker.prototype.introduce = function(){
    return "I am a Worker. I have a job.";
}
module.exports = Worker;