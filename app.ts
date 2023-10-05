// function add() {
//   let a: string = "text";

//   const b: number = 23;

//   const c: boolean = true;

//   let g: any = "text2";

//   g = 124;

//   g = true;
// }

// function add(n1: number, n2: any): any {
//   console.log(n1 + n2);
//   return n1 + n2;
// }

// add(2, 4);
// add(2, "4");

// tuply
// var arr:[number, string, boolean, number] = [1, 'text', true, 4]

// enum Color { Red = 10, Green, Blue}

// let c:Color = Color.Green;

// console.log(c);

/*
 Union type
let a: string | number | boolean = "text";

a = 12;

a = true;

console.log(a);

*/

/*
interface IUser{
    username: string,
    email: string,
    password: string
}

interface INewUser extends IUser{
    age: number
}

interface IMsg{
    msg: string
}

function register(user: INewUser): IMsg{
    console.log(user);
    
    return {
        msg: 'User created!'
    }

}

let res = register({ username: 'A', email: 'a.b@gamil.com', password: '1234', age: 23 })


console.log(res);

*/

/*

interface IUserObj { name: string, age:number }
let user:IUserObj = {
    name: 'A',
    age: 12
}

console.log(user);

*/

/*
let nums:number[] = [1, 2, 3, 4, 78, 23, 67]
let str:string[] = ['text', 'text2']

let fullData:any[] = [1, 'text', true]

console.log(nums);
console.log(str);
console.log(fullData);
*/

/*
 type assertion
let a:any = 12

let b = (a as number)

b = 12

console.log(a);
*/

/*
interface IUserForClass {
  name: string;
  age: number;
  getName(): string;
  getAge(): number;
}

class User implements IUserForClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

let user: IUserForClass = new User("Eshmat", 23);

console.log(user.getName());

console.log(user.getAge());
*/