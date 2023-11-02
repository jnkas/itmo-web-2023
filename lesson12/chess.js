// let board = [

//     ['1a', '1g', '5b', '6a', '6f', '7a', '7d', '7f', '7h', '8a', '8c', '8d', '8h'],
//     ['2a', '2c', '2e', '3d', '4g', '5d', '5e', '5h', '7g', '7e']

// ]

// console.log(board)


let board = [

    ['b_tower', null, 'b_bishop', 'b_king', 0, 0, 0, 'b_tower'],
    ['b_bap', null, null, 'b_bap', 'w_bishop', 'b_bap', 'b_horse', 'b_bap'],
    ['b_horse', 0, 0, 0, 0, 'b_horse', 0, 0], 
    [0, 'b_bap', 0, 'w_horse', 'w_bap', 0, 0, 'w_bap'],
    [0, 0, 0, 0, 0, 0, 'w_bap', 0],
    [0, 0, 0, 'w_bap', 0, 0, 0, 0],
    ['w_bap', 0, 'w_bap', 0, 'w_king', 0, 0, 0],
    ['b_queen', 0, 0, 0, 0, 0, 'b_bishop', 0 ]

]

// console.log(board)

// console.log(board[1].length)
// console.log(board[2].length)
// console.log(board[3].length)
// console.log(board[4].length)
// console.log(board[5].length)
// console.log(board[6].length)
// console.log(board[7].length)

// console.log(board[5][4])
// console.log(board[6][4])



// fot (let i = 0; i < 8; i++) 


for (let item of board) console.log(item.length)

let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

for (let i = 0; i < board.length; i++) {
        // проход всем по рядам доски

    for (let k = 0; k < board[i].length; k++) {
        // проход по клеткам
        let cell = board[i][k]
        // if(cell === 0 || cell === null) continue
        // console.log(cell + "на позиции " + (8 - i))
        let letter = abc[k]
        if(cell !== 0 && cell !== null) console.log(cell + " на позиции " + letter + (8 - i))

    }


}










