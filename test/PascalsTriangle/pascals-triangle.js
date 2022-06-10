import { pascals } from '../../src/PascalsTriangle/pascals-triangle.js'
import { expect } from 'chai';

describe('pascals triangle tests', () => {

    var tests = [
        [1,[[1]]],
        [2,[[1],[1,1]]],
        [5,[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(pascals(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})