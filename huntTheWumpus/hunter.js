class Hunter {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.numArrows = 5;
    }

    get x(){
        return this.x;
    }

    get y(){
        return this.y;
    }

    get coordinates(){
        return [x, y];
    }

    get numArrows(){
        return this.numArrows;
    }

    set x(x){
        this.x = x;
    }

    set y(y){
        this.y = y;
    }

    set numArrows(newNum){
        this.numArrows = newNum;
    }

}