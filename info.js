/*
   Data type
   Function in ts
   interface vs type
   OOP
*/

/* 

   Data types

   - boolean   -> let isDone: boolean = false;
   - number    -> let decimal: number = 6;
   - string    -> let color: string = "blue";
   - tuple     -> let x: [string, number] = ["hello", 10]
   - enum      -> enum Color { Red, Green, Blue } let c: Color = Color.Green;
   - any       -> ixtiyoriy (qiymat) type berish mumkin.
   - void      -> function return qaytarmaydi.
   - null      -> let n: null = null;
   - undefined -> let u: undefined = undefined;
   - union     -> string | number

*/

/*

 Object type
   const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
    };

*/

/*
   Array types
    let numArray: number[] = [1, 2, 3];
    let numArray1: Array<number> = [1, 2, 3];

    let strArray: string[] = ['1', '2', '3'];
    let strArray1: Array<string> = ['1', '2', '3'];

    let booleanArray: boolean[] = [true, false];
    let booleanArray1: Array<boolean> = [true, false];
*/

/*

Interface vs Type
     https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript?newreg=7b8132c4a4ce4c0bb1d23745d7d7a795

Interface
    interface Point {
      x: number;
      y: number;
      }

      interface SetPoint {
      (x: number, y: number): void;
   }

Interface extends interface
  interface PartialPointX { x: number; }
  interface Point extends PartialPointX { y: number; }


Type
   type Point = {
      x: number;
      y: number;
      };

   type SetPoint = (x: number, y: number) => void;

// primitive
       type Name = string;

// object
       type PartialPointX = { x: number; };
       type PartialPointY = { y: number; };

// union
       type PartialPoint = PartialPointX | PartialPointY;

// tuple
       type Data = [number, string];



Type alias extends type alias
       type PartialPointX = { x: number; };
       type Point = PartialPointX & { y: number; };




Interface extends type alias
      type PartialPointX = { x: number; };
      interface Point extends PartialPointX { y: number; }

Type alias extends interface
      interface PartialPointX { x: number; }
      type Point = PartialPointX & { y: number; };

*/

/*
  OOP
   class typescript
*/



