import { maximunDepth,BinarySearchTree,RegularTree } from '../../src/MaximumDepthOfBinaryTree/maximum-depth-of-binary-tree.js'
import { expect } from 'chai';


describe('maximun depth', () => {
    it('depth 3', () => {

        const tree = new RegularTree(3);
        tree.insertToLeft(9);
        
        const treeRight = new RegularTree(20);
        treeRight.insertToLeft(15);
        treeRight.insertToRight(7);

        tree.insertNodeToRight(treeRight)

        const t0 = performance.now();
        expect(3).to.eql(maximunDepth(tree.root));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    var tests = [4,10,1000]

    tests.forEach(function(test) {
        it('depth ' + test, () =>{
            const tree = treeGenerator(test);
            const t0 = performance.now();
            expect(test).to.eql(maximunDepth(tree.root));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);
        })
    })

    const treeGenerator = function(depth) {
        const tree = new BinarySearchTree();
        for(var i =0; i<depth;i++){
            tree.insert(i)
        }   
        return tree;
    }
})