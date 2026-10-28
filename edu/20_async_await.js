const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "resolve", word: str });
      } else {
        reject(new Error("reject error!"));
      }
    }, ms);
  });
};

const process = async () => {
  try {
    const result1 = await timer("A");
    console.log(result1.code, result1.word);

    const result2 = await timer("B");
    console.log(result2.code, result2.word);

    const result3 = await timer("C");
    console.log(result3.code, result3.word);

    const result4 = await timer("D");
    console.log(result4.code, result4.word);
  } catch (error) {
    console.log(error.message);
  }
};
process();
