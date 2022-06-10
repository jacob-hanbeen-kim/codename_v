export const pascals = function (numRows) {
    let result = [[1]];
    if(numRows==1){
        return result;
    } else {
        for(let i = 1; i < numRows; i++) {
            let newRow = [1];
            for(let j = 1; j < i;j++){
                newRow.push(result[i-1][j-1] + result[i-1][j])
            }
            newRow.push(1);
            result.push(newRow);
        }
    }
    return result;
};