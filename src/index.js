module.exports = function solveSudoku(matrix) {
    let res = matrix.concat();
    let len = 9;
    const tmp=[1,2,3,4,5,6,7,8,9];
    const checker = (len) => {
        for (let cols = 0; cols < len; cols++){
            for (let rows = 0; rows < len; rows++){
                if (res[cols][rows].length==1) continue;
    
                for (let i = 0; i < res[cols][rows].length; i++){
                    for (let j = 0; j < 9; j++){
                        if (res[cols][j]==res[cols][rows][i]){
                            res[cols][rows].splice(i,1);
                            j--;
                            continue;
                        }
                    }
                }
            }
        }
    }

    for (let cols = 0; cols < len; cols++){
	    for (let rows = 0; rows < len; rows++){
		    if (!matrix[cols][rows]){
				res[cols][rows] = tmp.concat();
			}
        }
    }

    for(let counter = 1; counter < 4; counter++){
        if(counter === 3){
            len /= 3;
        }
        checker(len);
    }

    return res;
}
