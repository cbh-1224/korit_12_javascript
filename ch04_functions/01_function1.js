// 함수의 정의
function add(a, b) {
  let sum = a + b;
  return sum;
}
// 함수의 호출
let sumNum = add(1, 2);
console.log(sumNum);

// 계산
let scores = [1,2,3,4,5,6,7,8,9,10];

function calcSum(scores) {
  let sum = 0;
  for(let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}

function calcAvg(scores) {
  let sum = calcSum(scores);
  let avg = sum / scores.length;
  return avg;
}

function printInfo(scores) {
  let sum = calcSum(scores);
  let avg = calcAvg(scores);
  console.log('총합은 ' + sum + '입니다.');
  console.log('평균은 ' + avg + '입니다.');  
}

printInfo(scores);
