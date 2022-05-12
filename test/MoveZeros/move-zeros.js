import { moveZeros } from '../../src/MoveZeros/move-zeros.js'
import { expect } from 'chai';

describe('move zeros', () => {

    var tests = [
        [[0],[0]],
        [[0,1,0,3,12],[1,3,12,0,0]],
        [[0,0,1,0,0],[1,0,0,0,0]]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(moveZeros(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})