
function superbowlWin(arr){
   const recObj = arr.find(i => i.result === "W"? i.year : undefined)

    if(recObj){
        return recObj.year;
    } else{
       return undefined
    }
}

