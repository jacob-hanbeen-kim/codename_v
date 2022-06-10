import { countAndSay } from '../../src/CountAndSay/count-and-say.js'
import { expect } from 'chai';

describe('countAndSay tests', () => {

    var tests = [
        [1,"1"],
        [2,"11"],
        [3,"21"],
        [4,"1211"]
    ]

    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(countAndSay(test[0])).to.eql(test[1]);
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        })
    })
})

