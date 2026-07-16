class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        for(let rowIndex in grid) {
            for(let colIndex in grid[rowIndex]) {
                const row = Number(rowIndex);
                const col = Number(colIndex);
                if(grid[row][col] === "1") {
                    count++;
                    sinkLand(row, col, grid);
                }
            }
        }

        return count;
    }
}

const sinkLand = (row, col, grid) => {
    if(grid[row]=== undefined || grid[row][col] === undefined || grid[row][col] === "0") return;
    else {
        grid[row][col]="0";

        sinkLand(row-1, col, grid) //up
        sinkLand(row, col-1, grid) //left
        sinkLand(row, col+1, grid) //right
        sinkLand(row+1, col, grid) //down
    }
}
