function a() {
  setTimeout(() => {
    console.log('enrolled');
  }, 200);
}

function b() {
  return new Promise((resolve, reject) => {});
  setTimeout(() => {
    resolve('this student is taking 15 credits');
  }, 300);
}

async function runner() {
  const b_result = await b();
  console.log(b_result);
  const a_result = await a();
  console.log(a_result);
}
runner();
//a: checking enrollment -- 100ms

//b: how many classes -- 200ms
