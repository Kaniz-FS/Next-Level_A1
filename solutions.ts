const multiplyValue = (value: number, multiplier?:number):number =>{
    if(multiplier===undefined){
        return value * 2;
    }
    return value * multiplier;
}

const processInput = (input: string| number|boolean): string |number => 
{
    if(typeof input === "string"){
        return input.trim().toLowerCase();
    }
    else if(typeof input === "number"){
        return input*10;
    }
    else { 
        if(input === true){
            return "Active";
        }
        return "Inactive"
    }

}

const formatCoordinate = (location: readonly [latitude: number, longitude: number, locationName: string]): string =>
{
  return "Location" + ":" + " " + location[2] + " " + "(" + location[0] + "," + " " + location[1] + ")";
}

const  concatenateArrays = <T>(...arrays: T[][]): T[] =>{
       return arrays.flat();
}


interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses =(
    courses: Course[],
    minStudents: number
): Course[] =>{
    return courses.filter((course)=>{
        return course.isPublished ===true && course.students>=minStudents;
    })

}


const  pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
):T[K][] =>{
    return items.map((item)=>{
        return item[key];
    })
}





class Employee {
    protected name : string;
    private baseSalary : number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string{
        return "Employee" + ":" + " " + this.name + "," + " " +"Base Salary" + ":" + " " + this.baseSalary
    }
}

class Manager extends Employee{
    private department: string;

    constructor( name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department= department;
    }
    getRoleInfo(): string{
        return "Manager"+" " + "of"+ " " + this.department + ":" + " " + this.name 
    }
}



const validateAgeAsync =(age:number):Promise<string>=>{
    return new Promise((resolve, reject)=>{
        if(age>=18){
            setTimeout(()=>{
                resolve("Access Granted")
            }, 1000)
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    })

}



