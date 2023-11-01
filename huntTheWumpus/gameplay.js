class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.children = [];
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


class Cell extends Node {
    constructor(x, y){
        super(x, y);
        this.visited = false;
        this.visible = false;
    }
}


class Graph {
    constructor(){
        this.nodes = []
    }

    add(node){
        if (!this.nodes.includes(node)){
            this.nodes.push(node);
        }
    }
}


class Gameboard extends Graph {
    constructor(height, width, hX, hY, wX, wY){
        super();
        this.height = height;
        this.width = width;
        this.hunter = new Hunter(hX, hY);
        this.wumpus = new Wumpus(wX, wY);

        this.nodes = []

        // for each row
        for (let row = 0; row < this.height; row++){

            let currentRow = []
            
            // for each column
            for (let column = 0; column < this.width; column++){
                // add an invisible, unvisited cell to the gameboard
                currentRow.push(new Cell(row, column));
            }

            this.nodes.push(currentRow);
        }

        // set the hunter's square to visible
        this.nodes[hX][hY].visible = true;
    }
}


class Hunter {
    constructor(xCoord, yCoord){
        this.x = xCoord;
        this.y = yCoord;
        this.numArrows = 5;
    }

    get coordinates(){
        return [this.x, this.y];
    }
}


class Wumpus {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.visible = false;
    }

    get coordinates(){
        return [this.x, this.y];
    }
}


class Gameplay {
    constructor(){
        this.board = new Gameboard(10, 10, 0, 0, 5, 5);
        this.hunter = new Hunter(0, 0);
        this.wumpus = new Wumpus(5, 5);
    }

    // log the current board to the console
    // invisible square: X
    // hunter: H
    // wumpus: W
    printBoard(){
        let str = "";

        // for each row
        for (let row = 0; row < this.board.height; row++){
            // for each column
            for (let column = 0; column < this.board.width; column++){

                // if the cell contains the wumpus
                if ([row, column] == this.wumpus.coordinates){
                    // if the wumpus is visible
                    if (this.wumpus.visible == true){
                        str += "W";
                    }
                    else {
                        str += "X";
                    }
                }
                // if the cell contains the hunter
                else if ([row, column] == this.hunter.coordinates){
                    str += "H";
                }
                // else, the cell is just a regular cell
                else {
                    // if the cell is visible
                    if (this.board.nodes[row][column].visible){
                        str += "O";
                    }
                    else {
                        str += "X";
                    }
                }
                
                // add a space after each cell
                str += " ";
            }
            // add a newline after each row
            str += "\n";
        }

        console.log(str);
    }
}



// test gameplay
let gp = new Gameplay();
gp.printBoard();