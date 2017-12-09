'use strict'
class Class {
    constructor(number) {
        this.number = number;
        this.leader = null;
    }

    assignLeader(Student) {
        if(Student.klass===this){
            this.leader = Student;
        }
        else{
            return "It is not one of us.";
        }
    }
    getDisplayName(){
        return "Class "+this.number;
    }

    appendMember(Student) {
        Student.klass = this;
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
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass ==null) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + ".";
        }
    }

    introduceWith(Student) {
        if (Student.klass == this.klass) {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                + Student.name + ".";
        }
        else {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                "teach " + Student.name + ".";
        }

    }
}
module.exports = {
    Class: Class,
    Person: Person,
    Student: Student,
    Teacher: Teacher
}
