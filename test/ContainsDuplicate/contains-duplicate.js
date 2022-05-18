import { containsDuplicate } from '../../src/ContainsDuplicate/contains-duplicate.js'
import { expect } from 'chai';

describe('contain duplicate', () => {

    var tests = [
        [[1,2,3,2,3,2], true],
        [[1,2,3], false]

    ]

    tests.forEach(function(test) {
        it(test[0] +" has duplicate "+ test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(containsDuplicate(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})