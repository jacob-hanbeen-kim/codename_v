import { firstUniqChar } from '../../src/FirstUniqueCharacterInAString/first-unique-char.js'
import { expect } from 'chai';

describe('first unique character in a string', () => {

    var tests = [
        ["leetcode", 0],
        ["loveleetcode", 2],
        ["aabb", -1]

    ]

    tests.forEach(function(test) {
        it(test[0] +" has duplicate "+ test[1], function() {
            const t0 = performance.now();
            expect(test[1]).to.eql(firstUniqChar(test[0]));
            const t1 = performance.now();
            console.log(`it took ${t1 - t0} milliseconds.`);        
        })
    })
})