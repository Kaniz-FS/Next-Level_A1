Access Modifiers in TypeScript OOP

Introduction:

Access modifiers are the most important part of Object-Oriented Programming (OOP) in typeScript. They help us to control the properties and methods which can be accessed from different parts of a code. By using access modifiers, we can protect our data and can makes our code more organized. TypeScript provides three main access modifiers: public, private and protected. It also provides readonly to prevent a property from being reassigned.

Details:

1. Public: It allows us to access properties and methods from both inside and outside the class. It is the default access modifier in TypeScript.

2. Private: It only allows us to access properties and methods only from inside the class where they are declared. We cannot directly access them from outside the class.

3. Protected: It allows us to access properties and methods inside the same class and in its child classes.

4. Readonly: It allows us to assign a value to properties inside the constructor. After that, we cannot reassign a new value to that property.

Code Example:

class Employee {
constructor(
        public name: string,
        private _baseSalary: number,
        protected age: number,
        readonly employeeId: number
    ) {}
    get baseSalary(): number {
        return this._baseSalary;
    }
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }

}

class Manager extends Employee {

 showAge() {
        console.log(this.age);
    }

}

Conclusion:
In short, access modifiers provide us the ability to control the access of class properties and methods. Public allows access from anywhere, private allows access within its own class and protected allows access within the class and its child classes. On the other hand, readonly prevents properties from being reassigned.
