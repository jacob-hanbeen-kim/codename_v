import { trailingZeroes } from '../../src/FactorialTrailingZeros/factorial-trailling-zeros.js'
import { expect } from 'chai';

describe('trailingZeroes tests', () => {

    var tests = [
        [0,0],
        [3,0],
        [5,1],
        [7,1],
        [10,2],
        [30,7],
        [31,7],
        [32,7],
        [33,7],
        [34,7],
        [35,8],
        [36,8],
        [37,8],
        [38,8],
        [39,8],
        [40,9],
        [41,9],
        [42,9],
        [43,9],
        [44,9],
        [45,10],
        [46,10],
        [47,10],
        [48,10],
        [49,10],
        [50,12],
        [51,12],
        [52,12],
        [53,12],
        [54,12],
        [55,13],
        [56,13],
        [57,13],
        [58,13],
        [59,13],
        [60,14],
        [61,14],
        [62,14],
        [63,14],
        [64,14]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(trailingZeroes(test[0])).to.eql(test[1]);
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})

