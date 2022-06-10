import { climbStairs } from '../../src/ClimbingStairs/climbing-stairs.js'
import { expect } from 'chai';

describe('climbing stairs', () => {

    var tests = [
        [1,1],
        [2,2],
        [3,3],
        [4,5],
        [5,8],
        [6,13],
        [45,1836311903]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(climbStairs(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})