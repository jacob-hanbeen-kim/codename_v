/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maximunDepth = function (root) {
    return maxDepthHandler(root,1)
};

const Node = function(val,left,right){
    this.value = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export class RegularTree{
    constructor(value) {
        this.root=new Node(value);
    }

    insertToLeft(value) {
        let currentNode = this.root;
        currentNode.left = new Node(value);
    }

    insertToRight(value) {
        let currentNode = this.root;
        currentNode.right = new Node(value);
    }

    insertNodeToLeft(node) {
        currentNode.left = node.root;
    }

    insertNodeToRight(node) {
        let currentNode = this.root;
        if(!currentNode.right){
            currentNode.right = node.root;
            return this;
        }
    }
}

export class BinarySearchTree {
    constructor() {
        this.root=null;
    }
    insert(value) {
        const newNode = new Node(value);
        if( this.root === null) {
         this.root = newNode;   
        } else {
            let currentNode = this.root;
            while(true){
                if(value<currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else { 
                    //Right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value){

    }
}

var maxDepthHandler = function(root, num){
    if(root == null){
          return 0
    }

    if (root.right == null && root.left == null){
        return num
    }

    if (root.right && root.left){
        return Math.max(maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num + 1))
    }  else if (root.right != null){
        return maxDepthHandler(root.right, num+1)
    } else {
        return maxDepthHandler(root.left, num+1)
    }
};