export const isSymmetric = function (root) {
    return root == null || isSymmetricHandler(root.left, root.right);
};

let isSymmetricHandler = function (node1,node2) {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) return false;
    return isSymmetricHandler(node1.left, node2.right) && isSymmetricHandler(node1.right, node2.left)
};

const Node = function(val,left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export class RegularTree{
    constructor(val) {
        this.root=new Node(val);
    }

    insertToLeft(val) {
        let currentNode = this.root;
        currentNode.left = new Node(val);
    }

    insertToRight(val) {
        let currentNode = this.root;
        currentNode.right = new Node(val);
    }

    insertNodeToLeft(node) {
        let currentNode = this.root;
        currentNode.left = node.root;
    }

    insertNodeToRight(node) {
        let currentNode = this.root;
        currentNode.right = node.root;
    }
}