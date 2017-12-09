
import Person from "../../src/practice_4/person.js";

function Worker(name,age){
   
}
function extend(Child, Parent) {
    　　　　var p = Parent.prototype;
    　　　　var c = Child.prototype;
    　　　　for (var i in p) {
    　　　　　　c[i] = p[i];
    　　　　　　}
    　　　　c.uber = p;
}
extend(Worker,Person);
Worker.prototype.introduce = function(){
    return "My name is "+this.name +". "+"I am "+this.age+" years old. "+"I am a Worker. I have a job.";
}
module.exports = Worker;