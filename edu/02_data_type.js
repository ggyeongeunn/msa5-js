// 원시형 (Primitive Type)
let num1 = 1;
let num2 = num1; 
num2 = 99;
// num1 = 1 / num2 = 99 : Primitive Type의 특성 
// 값 자체를 복사

// 참조형 (Reference Type)
let obj1 = {
  id: 1, 
  name: 'dooli', 
  etc: {
    addr: 'daegu',
    test: {
      key1: 'value1'
    }
  }
};
// let obj2 = obj1;
// obj2.name = 'gildong';
// 주소값 복사
// 값을 복사하고 싶을 때 사용금지 > 원본 유지가 안됨 / 객체 자체가 참조방식
// 두 타입의 가장 큰 차이점은 데이터가 메모리에 저장되는 방식과 복사되는 방식

// Shallow Copy : 객체가 최상위 계층밖에 없는 경우일 때 사용
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
let obj3 = {...obj1};
obj3.name = 'ddochi';
obj3.etc.addr = 'busan';

// Deep Copy
// 객체의 모든 계층의 값을 복사
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = 'ddochi';
obj4.etc.addr = 'gyeonggi';
console.log(obj1.name, obj4.name);
console.log(obj1.etc.addr, obj4.etc.addr);