'use strict'
class Class {
    constructor(number) {
        this.number = number;
        this.leader = null;
    }

    assignLeader(Student) {
        if(Student.klass.number===this.number) {
            this.leader = Student;
            if(this.hasOwnProperty("leaderListener")){
                let result ="I am "+this.leaderListener.name+". I know "+Student.name+" become Leader of Class "+this.number+".";
                console.log(result);
            }
        }
        else{
            console.log("It is not one of us.");
        }
    }
    registerAssignLeaderListener(teacher){
        this.leaderListener=teacher;
        
    }
    registerJoinListener(teacher){
        this.joinListener = teacher;
    }
    getDisplayName(){
        return "Class "+this.number;
    }

    appendMember(Student) {
        Student.klass = this;
        if(this.hasOwnProperty("joinListener")){
            let result= "I am "+this.joinListener.name+". I know "+Student.name+" has joined Class "+this.number+".";
            console.log(result);
        }
    }

    isIn(Student) {
        if (Student.klass == this)
            return true;
        else
            return false;
    }
}
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }
}
class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
        
    }

    introduce() {
        if (this.klass.leader == this) {
            return super.introduce() + " I am a Student. I am Leader of Class " + this.klass.number + "."
        }
        else {
            return super.introduce() + " I am a Student. I am at Class " + this.klass.number + ".";
        }
    }
}
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        let result = new String();
        if (this.klasses=== undefined)
            result = super.introduce() + ' I am a Teacher. I teach No Class.';
        else {
            let klassesSum = new String();
            for (let index = 0; index < this.klasses.length; index++) {
                if (index == this.klasses.length - 1)//所交班级的最后一个
                    klassesSum += this.klasses[index].number;
                else
                    klassesSum += this.klasses[index].number + ', ';
            }
            result = super.introduce() + ` I am a Teacher. I teach Class `+klassesSum+".";

        }
        return result;
    }

    introduceWith(Student) {
        for(let now of this.classes){
            if (Student.klass == now.number) {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                    + Student.name + ".";
            }
            else {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                    "teach " + Student.name + ".";
            }
        }

    }

    isTeaching(Student) {
        for (let klass of this.klasses) {
            if (klass.isIn(Student))
                return true;
        }
        return false;
    }
}
module.exports = {
    Class: Class,
    Person: Person,
    Student: Student,
    Teacher: Teacher
}
