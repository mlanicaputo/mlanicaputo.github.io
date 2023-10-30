// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
// https://www.codewizardshq.com/javascript-games/


class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.children = [];
    }

    get x(){
        return this.x;
    }

    get y(){
        return this.y;
    }

    get children(){
        return this.children;
    }

    isChild(node){
        if (this.children.includes(node)){
            return true;
        }
        return false;
    }

    connect(node){
        this.children.push(node);
    }

    disconnect(node){}
}