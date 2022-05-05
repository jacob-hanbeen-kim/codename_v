import { titleToNumber } from '../../src/ExcelSheetColumnNumber/excelSheetColumnNumber.js'
import { expect } from 'chai';

describe('excel sheet column number', () => {
    it('A', () => {
        const t0 = performance.now();
        expect(1).to.eql(titleToNumber('A'));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('AB', () => {
        const t0 = performance.now();
        expect(28).to.eql(titleToNumber('AB'));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('ZZ', () => {
        const t0 = performance.now();
        expect(702).to.eql(titleToNumber('ZZ'));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('ABA', () => {
        const t0 = performance.now();
        expect(729).to.eql(titleToNumber('ABA'));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('FXSHRXW', () => {
        const t0 = performance.now();
        expect(2147483647).to.eql(titleToNumber('FXSHRXW'));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })
})