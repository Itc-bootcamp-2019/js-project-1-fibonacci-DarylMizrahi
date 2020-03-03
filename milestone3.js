function fibonacci(x) {
  let prev_first = 0;
  let prev_second = 1;

  for (let i = 2; i <= x; i++) {
    y = prev_first + prev_second;
    prev_first = prev_second;
    prev_second = y;
  }
  return y;
}

let newnumber = document.getElementById("value1");
newnumber.innerText = 5;
document.getElementById("value2").innerText = fibonacci(5);
