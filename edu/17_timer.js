// timer function

// setTimeout(cb, ms[, ...args]) : number // [] 생략가능
// 설정한 일정 시간 후에 콜백함수 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args 추가
// return값은 timeoutId 정수값 (해당 타이머의 고유한 식별 값)

console.log("A");
const timeoutId = setTimeout(() => {
  console.log("B");
}, 1000);

// 해당 ID의 setTimeout을 취소 시킨다.
setTimeout(() => clearTimeout(timeoutId), 5000);

console.log("C");

// setInterval(cb, ms[, ...args]) : number
// 설정한 일정 시간마다 콜백함수를 실행하는 함수
// return값은 timeoutId 정수값 (해당 타이머의 고유한 식별 값)
const intervalId = setInterval(() => {
  console.log("interval");
  clearInterval(intervalId);
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
