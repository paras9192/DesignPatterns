interface Employee {
    name: string;
    age: number;
    salary: number;
}

class Teacher implements Employee {
    
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public  generateTeacher(name: string, age: number, salary: number){
        return new Teacher(name, age, salary);
    }
}

class Student implements Employee {
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public static generateStudent(name: string, age: number, salary: number){
        return new Student(name, age, salary);
    }
}

class Peon implements Employee {
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public static generatePeon(name: string, age: number, salary: number){
        return new Peon(name, age, salary);
    }
}

class FactoryUniversity {
    static generateEmployee(data:string, name: string, age: number, salary: number) {
        switch (data) {
            case "teacher":
                const teacher = new Teacher(name, age, salary);
                return teacher.generateTeacher(name, age, salary);
            case "student":
                return Student.generateStudent(name, age, salary);
            case "peon":
                return Peon.generatePeon(name, age, salary);
            default:
                return null;
        }
    }
}
