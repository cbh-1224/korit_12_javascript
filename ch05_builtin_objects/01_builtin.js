let strExample = '안녕하세요, 제 이름은 김일입니다. My Name is Kim1. My age is 20years old.';
let indexNum = strExample.indexOf('My');
console.log(indexNum); // 결과값: 20

/**
 * 실무 사용 사례
 * 전화번호 입력 받을 때 - 없어야하면 걸러내야하기 때문에 '010-1234-5678'dlfksms
 * String 값(number라면 010이 불가능합니다)에 .indexOf('-')를 확인하여 -1이 retrun되면
 * 다음 단계로, 3번지가 출력된다면 '-'을 제거하는 메서드로 넘길 수 있습니다.
 */

let lastIndexNum = strExample.lastIndexOf('My');
console.log(lastIndexNum); // 결과값: 37

let strFruits = 'Apple, Banana, Kiwi';
let banana = strFruits.slice(7,13);
console.log(banana); // slice(시작값, 한계값)
let slicedFruits = strFruits.slice(7);
console.log(slicedFruits); // 결과값: Banana, Kiwi
// python에서는 마이너스 인덱스가 존재하지만 JS는 존재하지 않는다. 하지만 slice()의 arguement로 마이너스 값을 넣어줄 수는 있다.
console.log(strFruits.slice(-12)); // 결과값: Banana, Kiwi
/**
 * 시작점이 -12번지고 그 다음이 -11, -10, ... -1까지 추출하는 메서드
 */
console.log(strFruits.substring(7, 13)); // 결과값 : Banana
/**
 * substring() / slice()가 동일해보이지만 substring은 음수값을 허용하지 않는다.
 */
console.log(strFruits.substr(7,6)); // 결과값 : Banana
/**
 * 7번지 부터 6개의 문자를 추출하는 메서드
 */
let welcomeSentence = 'Please visit Seoul and Seoul';
let modifiedSentence = welcomeSentence.replace('Seoul', 'Jeju');
console.log(modifiedSentence); // 결과값: Please visit Jeju and Seoul 
/**
 *  argument와 일치하는 문자열 중 처음 발견된 것을 두 번째 argument로 대체
 */
let modifiedSentence2 = welcomeSentence.replace('SEOUL', 'Jeju');
console.log(modifiedSentence2); // 결과값: Please visit Seoul and Seoul

let modifiedSentence3 = welcomeSentence.replace(/SEOUL/i, 'Jeju');
console.log(modifiedSentence3); // 결과값: Please visit Jeju and Seoul
// SEOUL은 찾고자하는 문자열 i는 insenstive의 약자로 덜까다롭게 굴겠다는 뜻

let modifiedSentence4 = welcomeSentence.replace(/Seoul/g, 'Jeju');
console.log(modifiedSentence4); // 결과값: Please visit Jeju and Jeju

console.log(welcomeSentence.toUpperCase());
console.log(welcomeSentence.toLowerCase());

let text1 = 'Hello';
let text2 = 'World';
let text3 = text1.concat(' ', text2);
console.log(text3);
// concat()은 2개 이상의 문자열을 하나로 합치는 함수
/**
 * 한국에서는 성이랑 이름 붙여서 쓰니까 별 문제가 없는데 영어권 애들은 
 * 이름 + 미들네임 + 성 이런식으로 공백이 포함되어있다.
 */
let fName = 'Jone';
let mName = 'Coffee';
let lName = 'Doe';
let fullName = fName.concat(' ', mName, ' ', lName);
console.log(fullName);
// .trim() - 공백 삭제 - 문자열의 앞 뒤 공백
let noSpaceName = '          Jane Moca Doe        ';
noSpaceName = noSpaceName.trim();
console.log(noSpaceName);
// split() - slice()와 비슷한 기능이지만 return 자료형이 다릅니다.
let birthday = '1998-07-09';
let birthdayResult = birthday.split('-');
console.log(birthdayResult);
/**
 * .split()의 결과값의 자료형은 Array에 해당됩니다. 즉 argument로 넣은 '-'를 만날 때마다
 * 배열의 element로 집어넣는다고 볼 수 있습니다.
 */
