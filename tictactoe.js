const board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];
const square = document.querySelectorAll(".square");



const NextMove = function(board,isX) {
  const rand = function(num) {
    return Math.floor(Math.random() * num);
    };
  const t = function(s){
    if(s !== " ")
      return false;
    return true;
   };
  let a = rand(3);
  let b = rand(3);
 while(!t(board[a][b])){
    a = rand(3);
    b = rand(3);
    }
    console.log([a,b]);
  };
  NextMove(board,true);

  const MakeMove = function(board, location, isX){
    if(location[1]>2 || location[0]>2 || location[1]<0 || location[0]<0){
      return -1;
    } else {
      if (isX) {
        board[location[0]][location[1]] ="X";
      } else{
        {
        board[location[0]][location[1]] = "O";
        }
      }
    }
  };

  const findWinner = function (board){
  for( let i = 0; i <= 2; i++ ){
    if(board[0][i] !== " " && board[0][i] + board[1][i] + board[2][i] === board[0][i] + board[0][i] + board[0][i]){  
      return {
        winner: board[0][i],
        winningLocation: [[0, i], [1, i], [2, i]]
      };
    }
    if(board[i][0] !== " " && board[i][0] + board[i][1] + board[i][2] === board[i][0] + board[i][0] + board[i][0]){ 
      return {
        winner: board[0][i],
        winningLocation: [[i, 0], [i, 1], [i, 2]]
      };
  
     }
  }
    if(board[0][0] !== " " && board[0][0] + board[1][1] + board[2][2] === board[0][0] + board[0][0] + board[0][0]){ 
      return {
        winner: board[0][0],
        winningLocation: [[0, 0], [1, 1], [2, 2]]
      };
    }

    if(board[0][2] !== " " && board[0][2] + board[1][1] + board[2][0] === board[1][1] + board[1][1] + board[1][1]){ 
      return {
        winner: board[1][1],
        winningLocation: [[0, 2], [1, 1], [2, 0]]
      };
    }
    if(!board.toString().includes(" ")) {
      return {
        winner: "none"
      };
    }
};
let isX =true;

const boardDiv = document.getElementById('board')
boardDiv.addEventListener("mousedown", function(event){
  if(event.target.className === "square") {
    event.target.className +=  "x";
    console.log(event.target.className)
    makeMove(board, [event.target.id[0], event.target.id[1]], true);
    if(findWinner(board)){
      alert(findWinner(board).winner + " hihhi");
    }
  }
}, false);

boardDiv.addEventListener("mouseup", function(event) {
  console.log(400)
  const next = nextMove(board, isX);
  console.log(document.getElementById(next[0]+ "" + next[1]).className)
  if(document.getElementById(next[0] + "" + next[1]).className === "square") {
    document.getElementById(next[0] + "" + next[1]).className += "O";
    makeMove(board, next, false);
    alert(findWinner(board).winner + " wej");
  }
  if(findWinner(board)){
    alert(findWinner(board).winner);
  }
}
);

  //   Simulating
  //   const loop = function(isX){
  //   const next = nextMove(board);
  //     makeMove(board,next,isX);
  //     if(!findWinner(board)) {
  //       loop(!isX);
  //     } else {
  //       alert("END");
  //     }
  //   };
  
  // simulate(true);



  
  
