function getPerson() {
  return {
    fName: '영',
    lName: '김',
    age: 20,
    email: 'kim0@test.com',
    city: '부산광역시',
    contry: '대한민국',
  };
};
 
let person = getPerson(); // 함수 호출 결과가 object니까 걔를 변수에 대입한 다음
// 객체명.key값을 통해서 해당 value를 불러냈습니다.
console.log(`해당 지원자는 ${person.city}에 살고 있으며 email은 ${person.email}입니다.`);

let email = getPerson().email; // 애초에 객체의 특정 key의 value만 변수에 저장하고
let city = getPerson().city;
console.log(`해당 지원자는 ${city}에 살고 있으며 email은 ${email}입니다.`);
// 콘솔에 찍힐 수 있도록 했습니다.

// 객체의 추출하고자 하는 key와 동일한 변수를 선언합니다. {} 내에.
let {email1, city1} = getPerson(); // 이렇게 쓰면 email이라고 하는 변수에 getPerson().email의 value값이
// city라고 하는 변수에 getPerson().city의 변수값이 들어갑니다.
console.log(`해당 지원자는 ${city1}에 살고 있으며 email은 ${email1}입니다.`);

function displayFullName({fName, lName}) { // 매개변수가 구조분해 되어있음을 {}로 알 수 있음
  console.log(`${lName} ${fName}`);
}

displayFullName(getPerson()); 
// 그러면 arguement로는 key로 fName / lName을 가지고 있는 애가 필수적으로 요구됩니다.
// 호출시의 argument와 정의 시의 매개변수의 차이점에 주목할 것. 매우 매우 중요함.

