class Wumpus {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.visible = false;
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

    get visible(){
        return this.visible;
    }

    set visible(isVisible){
        this.visible = isVisible;
    }
}