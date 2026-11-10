Type Alias vs Interface in TypeScript

Introduction:
Type alias and interface both helps to shape the structure of data in there own ways. By using them we can make our code more readable and organized.

Details:

1. Type Alias: It mainly used to define the custom name of any object type/dynamic type in typescript. By using type alias we dont need to define the object in object type repeatedly. Code example:

type user = {

    name: string;
    age: number;
    isActive : boolean;
    action : ()=> void;
    badges : string[];

};
const user1: user = {

    name: "kaniz",
    age: 24,
    isActive: true,
    action: ()=> console.log("Hello"),
    badges : ["zero","star"],

};
const user2: user ={

    name: "Fatema",
    age: 24,
    isActive: true,
    action: ()=> console.log("Bye"),
    badges : ["raven","verified"],

};

2. Interface: It mainly used to define the structure of an object. It helps to define which properties should exist in
   an object and what will be there data types. Code example:

interface user {

    name: string;
    age: number;
    isActive : boolean;
    action : ()=> void;
    badges : string[];

};
const user1: user = {

    name: "kaniz",
    age: 24,
    isActive: true,
    action: ()=> console.log("Hello"),
    badges : ["zero","star"],

};

Conclusion: In short, we can say that the choice of using between type alias and interface completely depends on preferences of our coding. However, Type Alias is used to define literals, union, tuples and primitives. On the other hand, Interface is mainly used to define the structure of Objects.
