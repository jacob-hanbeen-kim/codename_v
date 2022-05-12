import { sumOfTwoIntegers } from '../../src/SumOfTwoIntegers/sum-of-two-integers.js'
import { expect } from 'chai';

describe('sum of two integer', () => {

    var tests = [
        [[0,1],1],
        [[10,1],11],
        [[3,4],7]
    ]

    tests.forEach(function(test) {
        it(test[0][0] + ' plus ' +test[0][1]+' is ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(sumOfTwoIntegers(test[0][0],test[0][1]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})