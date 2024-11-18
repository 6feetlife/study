커링과 클로져 다시 읽고...정리한번 해보기
--------------------------------------
ES6(ECMA Script6) 신규 문법
가장 최신버전은 19년도 ES2019이지만, 15년도에 출시된
ES6에서 가독성과 유지보수성을 획기적으로 향상할 수 있는 문법이 많이 추가 되었다.
이때 let과 const, 템플릿 리터럴이 적용되었다
spread/rest
깊은복사..?
spread (...arr)
1.배열합치기
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

2.배열복사
let arr = [1, 2, 3];
let arr2 = [...arr]; // arr.slice() 와 유사

3.객체에서 사용하기
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };
이때 foo는 덮어씌워지며 key값이 3개가 된다.

4.함수에서 나머지 파라미터 받아오기
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  이때 ...manyMoreArgs에는 one two 를 제외한 나머지가 다 들어가있다

rest
파라미터를 배열의 형태로 받아서 사용할 수 있다.
파라미터가 들어오는곳에서만 사용가능 (함수)
----------------------------------------
구조분해
const [a, b, ...rest] = [10, 20, 30, 40, 50];
할당되는 값을 순서대로 할당한다.
const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
객체 또한 가능하다

화살표함수(arrow function)
함수표현식으로 함수를 정의할 때 function 키워드 대신 화살표(=>)를 사용합니다.
(자바_람다표현식?)
const multiply = (x, y) => {
	return x * y;
}
생략할 수 있는 몇 가지 규칙이있다.
1.매개변수가 한 개일 때, 소괄호(())를 생략할 수 있다.

2. 함수 코드 블록 내부가 하나의 문으로 구성되어 있다면 
중괄호({})를 생략할 수 있다. 이때 코드 블록 내부의 문이
값으로 평가될 수 있으면 return 키워드를 생략할 수 있다.










