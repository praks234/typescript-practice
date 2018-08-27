//Access modifiers for class--- public, private and protected ----->>>>>

export class Point {
    //make any member private by using private keyword. 
    // You dont need to specify the variables which are being used in constructor. You can directly add access modifier in constructor function.
    // private x: number;
    // private y: number;
    //make values optional by using '?'
    constructor (private _x?: number, private _y?: number) {
        // You need to initialize these if you are using access modifiers in constructor itself.
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log("X: "+this._x+" Y: "+this._y);
    };

    getDistance(another: Point) {
        //...
    };
    //Usual way of getting and setting x.
    // getX() {
    //     return this.x;
    // };

    // setX(value) {
    //     if (value) {
    //         throw new Error('value cann not be less thann 0.');
    //     }
    //     this.x = value;
    // }

    //Use properties to get or set x and y
    get x() {
        return this._x;
    }

    set x(value) {
        if (value) {
            throw new Error('value cann not be less thann 0.');
        }
        this._x = value;
    }
}