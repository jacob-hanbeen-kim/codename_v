import { isAnagram } from '../../src/ValidAnagram/valid-anagram.js'
import { expect } from 'chai';

describe('valid anagram', () => {

    var tests = [
        [["cat","act"],true],
        [["aba","aba"],true],
        [["abeeea","abad"],false],
        [["aba","abad"],false],
        [["dad","add"],true]
    ]

    tests.forEach(function(test) {
        it(test[0][0] + ' plus ' +test[0][1]+' is ' + test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(isAnagram(test[0][0],test[0][1]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})