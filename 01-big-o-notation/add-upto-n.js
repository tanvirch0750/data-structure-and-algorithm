function addUpToN(n) {
  let res = 0;

  for (i = 1; i <= n; i++) {
    res = res + i;
  }

  return res;
}

console.log('result of 100: ', addUpToN(100));

function addUpToNv2(n) {
  return (n * (n + 1)) / 2;
}

console.log('result of 100 v2: ', addUpToNv2(100));
