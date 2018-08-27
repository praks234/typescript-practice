"use strict";
//Access modifiers for class--- public, private and protected ----->>>>>
exports.__esModule = true;
var Point = /** @class */ (function () {
    //make any member private by using private keyword. 
    // You dont need to specify the variables which are being used in constructor. You can directly add access modifier in constructor function.
    // private x: number;
    // private y: number;
    //make values optional by using '?'
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // You need to initialize these if you are using access modifiers in constructor itself.
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + " Y: " + this._y);
    };
    ;
    Point.prototype.getDistance = function (another) {
        //...
    };
    ;
    Object.defineProperty(Point.prototype, "x", {
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
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value) {
                throw new Error('value cann not be less thann 0.');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
