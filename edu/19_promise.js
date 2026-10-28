// setTimeout(() => {
//   console.log("A");
// }, 1500);

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// setTimeout(() => {
//   console.log("C");
// }, 500);

// callback hell
// setTimeout(() => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//   }, 1000);
// }, 1500);

// 콜백 지옥을 회피하기 위해 프로미스 기반으로 변경.
const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "resolve", word: str });
      } else {
        reject(new Error("reject error"));
      }
    }, ms);
  });
};

timer("A")
  .then((result) => {
    // resolve일 때 실행되는 코드
    console.log(result.code, result.word);
    return timer("B");
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("C");
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("D");
  })
  .catch((error) => {
    // reject일 때 실행되는 코드
    console.log("!reject!");
    console.log(error.message);
  })
  .finally(() => {
    // resolve reject 무조건 실행되는 코드
    console.log("!finally!");
  });
