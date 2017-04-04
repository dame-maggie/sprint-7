

// minimun
function min(x, y){
  if(x<y){
   return x;
  } else {
   return y;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//recursion
function isEven(number){
  if(number<0){
    number = number*-1;
  }
  if(number == 1){
    return false;
  } else if(number == 0){
    return true;
  } else {
    return isEven(number-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false :)



//bean counting
function countBs(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i)=="B"){
      count++;
    }
  }
  return count;
}

function countChar(str, letter){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i)==letter){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
