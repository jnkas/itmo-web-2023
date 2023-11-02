let board = [
    ['b_tower', 0, 'b_bishop', 'b_king', 0, 0, 0, 'b_tower' ],
    ['b_bap', 0, 0, 'b_bap', 'w_bishop', 'b_bap', 'w_horse','b_bap' ],
    ['b_horse', 0, 0, 0, 0, 'b_horse', 0, 0],
    [0, 'b_bap', 0, 'w_horse', 'w_bap', 0, 0, 'w_bap'],
    [0, 0, 0, 0, 0, 0, 'w_bap', 0],
    [0,0,0,'w_bap', 0,0,0,0],
    ['w_bap',0,'w_bap', 0, 'w_king', 0,0,0],
    ['b_queen', 0,0,0,0,0,'b_bishop',0]
]

// for (let item of board) console.log(item.length)

let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
// console.log(abc[0])

for (let i = 0; i < board.length; i++) {

    //идем по рядам доски
    for (let k = 0; k < board[i].length; k++) {
        //идем по клеткам
        let cell = board[i][k]
        let letter = abc[k] 
        if(cell !== 0) console.log(cell + " на позиции " + letter + (8 - i))
        
    }
    
}



// console.log(board[3][3])
