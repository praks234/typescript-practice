// import {Point } from './point';
// //Typescript types
// // let a: number;
// // let b: boolean;
// // let c: string;
// // let d: any;
// // let e: number[] = [1,2,43];
// // let f: any[] = [1, true, {}];

// // //We have enums as well
// // //we used to declare constants like this in javascript
// // const ColorBlue = 0;
// // const ColorRed = 1;
// // const ColorGreen =2;

// // //We can do so using enums in typescript

// // enum Color {Blue = 0, Red = 1, Green = 2};
// // let backgroundColor = Color.Blue;

// // //Type Assertions --->>>
// // // When we dont assign any value to a variable its type sets to any. We need to
// // // tell the compiler about its type explicitly. Here are the examples of that
// // let message = 'b';
// // message = 'a';
// // let endsWithC = (<string>message).endsWith('c');
// // let alternativeEndsWithC = (message as string).endsWith('c');

// // //Arrow Functions --->>>
// // //old way 
// // let log = function(message) {
// //     console.log(message);
// // }
// // //new way 
// // let doLog = (message) => console.log(message);

// //Interfaces ----->>>>
// // We can declare and not define in interfaces.
// //an example ->
// // THis function may have many number of arguments, so its a good practise to pass
// // an object cotaining those arguments.

// // let drawPoint = (z,y,a,b,c,d) => {
// //     //...
// // }
// // drawPoint(1, 2);

// //Solution to above problem ->

// // let drawPoint = (point: {x: number, y: number}) => {
// //     //...
// // }
// // drawPoint({
// //     x: 1,
// //     y: 2
// // });

// //so instead of defining the type of each property , we use iterface

// // interface Point {
// //     x: number,
// //     y: number
// // }

// // let drawPoint = (point: Point) => {
// //     //...
// // }
// // drawPoint({
// //     x: 1,
// //     y: 2
// // });

// //Classes --->>>
// //We should use classes to achieve above example of interfaces.
// // class Point {
// //     x: number;
// //     y: number;

// //     draw() {
// //         console.log("X: "+this.x+" Y: "+this.y);
// //     };

// //     getDistance(another: Point) {
// //         //...
// //     }
// // }
// //Declare a variable of class Point
// // let point = new Point();
// // point.x =1;
// // point.y = 2;
// // point.draw();

// //Using a constructor for above iitialization.

// // class Point {
// //     x: number;
// //     y: number;
// //     //make values optional by using '?'
// //     constructor (x?: number, y?: number) {
// //         this.x = x;
// //         this.y = y;
// //     }

// //     draw() {
// //         console.log("X: "+this.x+" Y: "+this.y);
// //     };

// //     getDistance(another: Point) {
// //         //...
// //     }
// // }

// // let point = new Point(1, 2);
// // point.draw();



// let point = new Point(1, 2);
// let x = point.x;
// point.x = 10;
// point.draw();

// Exercise for Likes component
import {LikesComponent} from './likes.component';

let component = new LikesComponent(10, false);
component.onClick();
console.log(`like count: ${component.likesCount}, isSelected: ${component.isSelected}`);