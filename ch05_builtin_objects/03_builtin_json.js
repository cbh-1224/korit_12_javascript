let data = {
  "employees": [
    {"fName": "영", "lName": "김"},
    {"fName": "일", "lName": "김"},
    {"fName": "이", "lName": "김"}
  ]
}

console.log(data.employees[2].lName + data.employees[2].fName);
console.log(data);

let stringValue = JSON.stringify(data);
// 객체를 string으로 JSON 형태에 맞게 바꿔줌
console.log(stringValue);

let text = '{"employees":[{"fName":"zero","lName":"김"},{"fName":"one","lName":"김"},{"fName":"two","lName":"김"}]}';

let jsObj = JSON.parse(text);
console.log(jsObj);

/**
 * JS Object <-> JSON로 왔다갔다 하는 부분은 매우 자주 일어납니다.
 * JSON.parse(JSONString); 과 JSON.stringfy(JSOBject);는 항상 사용하는 형태라고 생각해야함
 */