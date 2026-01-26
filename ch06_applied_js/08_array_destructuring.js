function getScores() {
  return [70,80,90];
}
let scores = getScores();
let x = scores[0];
let y = scores[1];
let z = scores[2];

let [a, b, c] = getScores();
// 선언된 변수가 배열문법으로 보이지만 그게 아니라 함수 호출의 결과인 배열의 
// 각 element를 '순서대로' 저장하기 위한 문법에 해당합니다.
console.log(a);
console.log(b);
console.log(c);  // 즉 배열의 length와 같은 수의 변수가 [] 내에 선언되어야겠네요.

let [q, w, e, r] = [1,2,3];
console.log(q);
console.log(w);
console.log(e);
console.log(r); // 결과값: undefined
// 누락될 경우의 예시 여기서도 중요한건 순서이다.