import { pivotIndex } from '../../src/PiviotIndex/pivot-index.js'
import { expect } from 'chai';

describe('pivot index array', () => {

    var tests = [
        [[1,7,3,6,5,6],3],
        [[1,2,3],-1],
        [[2,1,-1],0]
    ]

    tests.forEach(function(test) {
        it(tests[0]  + ' + is ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(pivotIndex(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})