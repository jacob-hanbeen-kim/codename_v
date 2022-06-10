import { maxProfit } from '../../src/MaxProfit/max-profit.js'
import { expect } from 'chai';

describe('max profit tests', () => {

    var tests = [
        [[7,1,5,3,6,4],5],
        [[7,6,4,3,1],0],
        [[2,1,2,1,0,1,2],2],
        [[3,2,6,5,0,3],4],
        [[2,4,1],2],
        [[2,4,1],2]
    ]

    
    tests.forEach(function(test) {
        it(test[0] +' to ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(maxProfit(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})