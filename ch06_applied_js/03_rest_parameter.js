function sum(x1, x2) {
  let y = x1 + x2;
  return y;
}


console.log(sum(5, 7));

function sum(x1, x2, x3, x4) {
  let y = x1 + x2 + x3 + x4;
  return y;
}


console.log(sum(5, 7, 1, 3));


function sum(...args) { 
  // 매개변수를 이렇게 설정하면, 함수 호출 시 매개변수 개수에 상관없이 할당이 가능
  // 이렇게 지정된 값은 '배열'로 저장됨.  
  let total = 0;
  for(let x of args) {
    total += x;
  }
  return total;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));