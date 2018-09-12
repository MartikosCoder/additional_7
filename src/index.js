module.exports = function solveSudoku(matrix) {
    return matrix.map((row) => { return row.map(element => (element === 0) ? [] : element); });
}
