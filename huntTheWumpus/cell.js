class Cell extends Node {
    constructor(){
        this.visited = false;
        this.visible = false;
    }

    get visited(){
        return this.visited;
    }

    get visible(){
        return this.visible;
    }

    set visited(isVisited){
        this.visited = isVisited;
    }

    set visible(isVisible){
        this.visible = isVisible;
    }
}
