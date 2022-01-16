function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function(val) {
    const n = new Node(val);
    if(this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}

Tree.prototype.traverse = function() {
    this.root.visit();
}

Node.prototype.addNode = function(n) {
    if(n.value < this.value) {
        if(this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if(n.value > this.value) {
        if(this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}

Node.prototype.visit = function() {
    if(this.left != null) {
        this.left.visit();
    }
    console.log(this.value);
    if(this.right != null) {
        this.right.visit();
    }
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

const tree = new Tree();
tree.addValue(5);
tree.addValue(3);
tree.addValue(7);
tree.traverse();
console.log(tree);