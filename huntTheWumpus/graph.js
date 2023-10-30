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