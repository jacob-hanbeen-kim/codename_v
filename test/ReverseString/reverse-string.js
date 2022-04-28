import { reverseString } from '../../src/ReverseString/reverse-string.js'
import { expect } from 'chai';

describe('reverse string', () => {
    it('hello', () => {
        const t0 = performance.now();
        expect(['o', 'l', 'l', 'e', 'h']).to.eql(reverseString(['h', 'e', 'l', 'l', 'o']));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('big array', () => {
        const t0 = performance.now();
        let array = new Array[1000 * 1000].fill('a');
        array[1] = 'b';

        expect(array.reverse()).to.eql(reverseString(array));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })
})