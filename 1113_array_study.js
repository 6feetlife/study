
// function greeting(name){
// console.log('hello' + name)
// }
// 전달인자_parameter
// ===========================================

// 배열 Array
// (순서가 있는 값----index번호)
// ["a","b","c"]---index
// "a" -- element
// 배열은 let abd[1] = "d" 변경이 가능하다
// arr[1] ---"a" arr[]사용해서 element 호출가능
// 변수명은 단수,복수 맞춰서 잘 적어야한다.

// let myNumbers =[[13,30], [73.8], [44, 17]];
// let innerArr = numbers[1];
// numbers[1][0] === 73
// myNumbers.length;
// arr.length();
// //여기서 이 두개의 length는 다른 의미를 가진다
// arr = [1,2,3,5,6]
// arr.push(4);
// --> arr에 4를 추가한다 라는 의미
// push = 가장 마지막 순서로 추가한다
// unshift = 가장 앞 순서로 추가한다
// shift = 가장 앞 순서를 삭제한다.
// pop = 가장 마지막 순서 element를 뽑아낸다.
// stack = 후입선출 ex)프링글스
//----------------------------
//배열의 반복
// 배열은 반복문 사용이 기본이다

// let kNum = [10, 20, 40, 10];
// let sum = 0;
// for(let n = 0; n < kNum.length; n++){
//     sum += kNum[n];
// }
// console.log(sum); //--->80
// //----------------------------
// 배열 메서드
// Array.isArray(value) 함수는 value가 배열이면 true 아니면 false를 반환한다.
// for (let i = 0; i < nestedArray.length; i++) {
//     let currentEl = nestedArray[i];
//     if(Array.isArray(currentEl)){
//         for(let j = 0; j < currentEl.length; j++){
//             console.log(currentEl[j]);
//         }
//     } else {
//         console.log(currentEl);
//     }
// }
//몇 중첩인지는 depth라고 부른다.
// indexof는 element를 찾고 있다면 해당 위치까지 표현해준다
// 단, 같은 element가 여러개라면 가장 앞에있는 elemnt만 표현해준다
