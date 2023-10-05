// task 2
// function actionNumbers(arr): any {
//   let sum = arr.reduce((a, current) => a + current, 0);
//   let res = {
//     add: sum,
//     minus: arr[0] - arr[1] - arr[2],
//     divide: arr[0] / arr[1] / arr[2],
//     multiply: arr[0] * arr[1] * arr[2],
//   };
//   console.log(res);
// }
// actionNumbers([15, 3, 5]);
// task 3
// function getFirstValueAndAddToArray(arr): void {
//   let first = arr[0];
//   arr.shift();
//   arr.push(first);
//   console.log(arr);
// }
// getFirstValueAndAddToArray([3, 4, 12, 3, 4]);
// task 4
// function makePair(arr): void {
//   let sum = arr.reduce((a, c) => a + c, 0);
//   arr.push(sum);
//   console.log(arr);
// }
// makePair([1, 2, 3]);
// task 5
// function drop(arr: number[], num: number): void {
//   let newArr: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== num) newArr.push(arr[i]);
//   }
//   console.log(newArr);
// }
// drop([1, 2, 3, 5, 6, 7, 3], 7);
// task 8
// function incerementItem(arr: any  ): void {
//   let newArr = arr.map((e) => e + 1);
//   console.log(newArr);
// }
// incerementItem([2, 3, 5, 6]);
// task 9
// function getStringLength(arr: any): void {
//   let newArr: string[] = [];
//   arr.map((i) => {
//     newArr.push(i.length);
//   });
//   console.log(newArr);
// }
// getStringLength(["hello some", "hiii", "howd do yo"]);
// task 10
// function stringToArray(text: string, num: number): void {
//   let arr = text.split("").slice(0, num);
//   console.log(arr);
// }
// stringToArray("Hello", 3);
// task 12
// function findIndex(arr: string[], text: string){
//   let index = 0
//   for (let i=0; i<arr.length; i++) {
//       if(arr[i] === text){
//         index = i
//       }
//   }
//   console.log(index);
// }
// findIndex(["hello", "hi", "howdy"], "howdy");
