/**
 * @param {string} columnTitle
 * @return {number}
 */
// More readable solution
export var titleToNumber = function (columnTitle) {
    // reverse string
    columnTitle = columnTitle.split("").reverse().join("");

    let columnNum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let code = columnTitle.charCodeAt(i) - 64;
        columnNum += code * Math.pow(26, i)
    }

    return columnNum;
};

// Initial Approach
export var titleToNumber2 = function (columnTitle) {
    // A = 0 * 26 + 1
    // Z = 0 * 26 + 26
    // AA = 27 = 1 * 26 + 1
    // AB = 28 = 1 * 26 + 3
    // AY = 51 = 1 * 26 + 25
    // AZ = 52 = 1 * 26 + 26
    // BA = 53 = 2 * 26 + 1
    // ZZ = 702 = 26 * 26 + 26
    // AAA = 703 = 1*26^(i) + 1*26^(i-1) + 1 * 26^(i-2)
    // AAZ = 728 = 1*26^(i) + 1*26^(i-1) + 26 * 26^(i-2)
    // ABA = 729 = 1*26^(i) + 2*26^(i-1) + 1 * 26^(i-2)
    let bound = 'A'.charCodeAt(0) - 1; // 64

    let columnNum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let code = columnTitle.charCodeAt(i) - bound;
        columnNum += code * Math.pow(26, columnTitle.length - 1 - i)
    }

    return columnNum;
};