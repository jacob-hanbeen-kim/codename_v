import { reverseString } from '../../src/ReverseString/reverse-string.js'
import { expect } from 'chai';

describe('reverse string', () => {
    it('hello', () => {
        expect(['o', 'l', 'l', 'e', 'h']).to.eql(reverseString(['h', 'e', 'l', 'l', 'o']));
    })
})