class Wumpus extends Cell{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.visible = false;
    }

    get visible(){
        return this.visible;
    }

    set visible(isVisible){
        this.visible = isVisible;
    }
}