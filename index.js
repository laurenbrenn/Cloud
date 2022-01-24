function a() {
  setTimeout(() => {
    console.log('enrolled');
  }, 100);
}

function b() {
  return new Promise((resolve, reject) => {});
  setTimeout(() => {
    console.log('this student is taking 15 credits');
  }, 200);
}

a();
b();
//a: checking enrollment -- 100ms

//b: how many classes -- 200ms
