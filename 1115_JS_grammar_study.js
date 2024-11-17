// 원시 자료형 (primitive)
// 일단 string을 제외한 타입들
// stack
// 참조 자료형(reference)
// heap ex)배열
// --------------------------------------
// 얕은 복사



// 깊은 복사
// slice

// spread syntax
// arr1=[1,2,3]
// let arr2 = [...arr]

// spread syntax 안되는경우
// let arr = [[1,2],[3,4]];
// let arr2 = [...arr1];
// console.log(arr2 === arr1) -->false
// 만약 arr1[0][1]= 9
// 이렇게 변경하면 arr1과 arr2 전부 바뀐걸 볼수있다.
// 배열안에 배열, 배열안에 객체 그 반대도 마찬가지이다.

// let arr2 = [];
// for(let i = 0; i < arr1.length; i++){
//     let currentInnerArray = arri[i];
//     arr2.push(...currentInnerArray);
// }

// let JSONDATA = "{data; {\"name\":\"응애\"}}"
// 전부 문자열로 바꿔서 복사하면 깊은 복사가 된다
// 뎁스와 상관없이

// JSON으로 깊은복사 하는 방법
// let stringJsonData = JSON.stringify(obj);
// let copieobj = JSON.parse(stringJsonData);
// let copieobj = JSON.parse(stringJsonData(obj));
// 남들이 만들어놓은걸 가져와 쓰는것 = 라이브러리
// ==============================================

// Scope
// let과 const의 범위를 뜻한다

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("for 밖에서 접근하는 i는 아래에 있어요");
// console.log(i);

// ==========================================
// const let 
// const arr =[1,2];
// arr[1] =4;
// arr자체를 바꾸는건 안되지만
// 배열안에 있는 값을 바꾸는것이기에 가능하다.

// =======================================
// window객체
// side effect

// 선언 안된 변수는 전역변수로 적용된다.
// 클로저
// const globalVar = '전역 변수';
// function outerFn(){
//     const outerFnVar = 'outer 함수 내의 변수';
//     const innerFn = function(){
//         return 'innerFn은' + outerFnVar +'와' +globalVar + 에 접근할 수 있습니다.''
//     }
//     return innerFn;
// }
// console.log(outerFn()());










