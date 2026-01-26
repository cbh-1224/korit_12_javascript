let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1];
console.log(arr3); // 결과값: [ 1, 2, 3, 4, 5, 6 ]
/**
 * 배열, 문자열과 같이 iteration(반복가능자료형) 형태의 데이터를 
 * element 하나하나로 분해해서 사용이 가능하다.
 * arr1, 2는 자료형이 배열 -> ...arr1 / ...arr2는 자료형이 배열이 아님
 * 4, 5, 6이라는 각각의 element와 1, 2, 3 이라는 각각의 element입니다.
 * 즉 자료형을 착각하기가 너무 쉽습니다.
 */

let cd = 'CD';
let alphabets = ['A', 'B', ...cd];
console.log(alphabets);

for (let alphabet of alphabets) {
    console.log(alphabet.toLowerCase());
}
