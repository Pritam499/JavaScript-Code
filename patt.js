function runProgram(input) {
    // Write code here
    for(let i=0;i<input;i++){
      let row = " "
      for(let j=0;j<input;j++){
        if (i===0 || j ===0 || j===input-1){
          row +="* "
        }else{
          row +="_"
        }
      }
      console.log(row)
    }
  }

  runProgram(5)