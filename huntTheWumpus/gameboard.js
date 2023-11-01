class Gameboard extends Graph {
    constructor(height, width, hX, hY, wX, wY){
        this.height = height;
        this.width = width;
        this.hunter = new Hunter(hX, hY);
        this.wumpus = new Wumpus(wX, wY);

        this.nodes = []

        // for each row
        for (let row = 0; i < this.height; row++){

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

