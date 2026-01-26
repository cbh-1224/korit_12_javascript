if(typeof Storage !== 'undefiend' ) {
  localStorage.setItem('title', '위대한개츠비');
}

const users = [
  {id: 1, name: 'Kim'},
  {id: 2, name: 'Lee'},
];

localStorage.setItem('users', JSON.stringify(users));

// 다시 받아오는 부분
if(typeof Storage !== 'undefined') {
  console.log(localStorage.getItem('title')); // key를 통해 확인
  console.log(localStorage.getItem('users'));  
  console.log(JSON.parse(localStorage.getItem('users')));
}

let users2 = JSON.parse(localStorage.getItem('users'));
let kim = users2[0].name; // 추가 연산을 한 사례
console.log(kim);

// 지울 때 쓰는 메서드는 removeItem(키);
localStorage.removeItem('title');