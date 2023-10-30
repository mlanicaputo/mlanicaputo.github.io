class Gameboard extends Graph {
    constructor(height, width, hX, hY, wX, wY){
        this.height = height;
        this.width = width;
        this.hunter = new Hunter(hX, hY);
        this.wumpus = new Wumpus(wX, wY);

        this.nodes = []

        // populate the graph with invisible nodes
        for (let i = 0; i < this.height; i++){

            let currentRow = []

            for (let j = 0; j < this.width; j++){
                currentRow.push(new Cell(i, j));
            }

            this.nodes.push(currentRow);
        }

        // set the hunter's square to visible
        this.nodes[hX][hY].visible = true;
    }
}