
export class LikesComponent {
    constructor(private _likesCount: number, private _isSelected: boolean){}
    onClick () {
        this._likesCount += (this._isSelected) ? -1 : +1
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        console.log("hello for checking branch switch");
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}
