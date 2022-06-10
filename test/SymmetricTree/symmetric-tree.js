import { isSymmetric,RegularTree } from '../../src/SymmetricTree/symmetric-tree.js'
import { expect } from 'chai';


describe('is tree symetric depth', () => {


    var tests = [
        [[1,2,2,3,4,4,3],true]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(isSymmetric(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})