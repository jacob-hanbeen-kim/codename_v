import { runningSum } from '../../src/RunningSum/running-sum.js'
import { expect } from 'chai';

describe('running sum array', () => {

    var tests = [
        [[1,2,3,4],[1,3,6,10]],
        [[1,1,1,1,1],[1,2,3,4,5]],
        [[3,1,2,10,1],[3,4,6,16,17]]
    ]

    tests.forEach(function(test) {
        it(tests[0]  + ' + is ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(runningSum(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})