function fibonacci(x) {
  let prev_first = 0;
  let prev_second = 1;

  if (x > 1) {
    for (let i = 2; i <= x; i++) {
      y = prev_first + prev_second;
      prev_first = prev_second;
      prev_second = y;
    }
    return y;
  } else if (x == 0) {
    return (y = 0);
  } else if (x == 1) {
    return (y = 1);
  }
}

function principal() {
  let newnumber = document.getElementById("value1").value;
  let result = fibonacci(newnumber);
  document.getElementById("value2").innerText = result;
}
