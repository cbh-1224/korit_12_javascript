let person = {lastName: '김', firstName: '영', age: 20, score: 4.5}
// for-in 구문 형식
/**
 * for (const 변수명 in 반복가능객체) {
 *  반복실행문
 * }
 */
for(const key in person) {
  console.log(key); // 객체에 대고 for-in 돌리면 key값이 나옴.
}
for(const key in person) {
  console.log(person.key);
}
/**
 * 이상의 코드는 불가능 person.key라고하는 속성은 없음
 */

for(const key in person) {
  console.log(person[key]);
}
/**
 * key가 변수로 선언되어 있고 거기의 값에 반복문 시점마다 자료형이 들어가있어서
 * person[key]로는 value의 호출이 가능하다.
 */