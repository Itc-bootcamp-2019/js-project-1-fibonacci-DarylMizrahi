function isPotentialJSON(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

let mybutton = document.getElementById("myBtn");
let result = document.getElementById("result");
mybutton.addEventListener("click", getFib);

function getFib() {
  document.getElementById("result").classList.add("resultdisappear");
  document.getElementById("redappear").classList.remove("redboxappear");
  let newnumber = document.getElementById("value1").value;
  document.getElementById("redappear").classList.remove("redboxappear");
  if (newnumber >= 50) {
    document.getElementById("redappear").classList.add("redboxappear");
  } else {
    let checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
      inputFibNumber(newnumber);
    } else {
      calculateFibNumber(newnumber);
    }
  }
}

function calculateFibNumber(n) {
  let a, b, r;
  a = 0;
  b = 1;

  for (let i = 1; i < n; i++) {
    r = a + b;
    a = b;
    b = r;
  }
  document.getElementById("result").classList.remove("resultdisappear");
  result.innerText = r.toString();
}

function inputFibNumber(n) {
  let spin = document.getElementById("loader");
  result.style.color = "black";
  spin.style.visibility = "visible";
  fetch("http://localhost:5050/fibonacci/" + n)
    .then(response => response.text())
    .then(data => {
      spin.style.visibility = "hidden";
      document.getElementById("result").classList.remove("resultdisappear");
      createFiblist(n);
      if (isPotentialJSON(data)) {
        let isJSON = JSON.parse(data);
        result.innerText = isJSON.result;
      } else {
        let servError = "Server Error: ";
        let globalMessage = servError + data;
        result.style.color = "red";
        result.innerText = globalMessage;
      }
    });
}

function getCreatedAt(millis) {
  return new Date(millis);
}

function createFiblist(n) {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(response => response.text())
    .then(data => {
      if (isPotentialJSON(data)) {
        let isJSON = JSON.parse(data);
        const result = isJSON.results;
        console.log(result);

        for (let i = 0; i < result.length; i++) {
          let list = document.getElementById("list");
          let node = document.createElement("div");
          node.className = "list-group-item style-item";
          //node.className += "style-item";

          list.appendChild(node);
          node.innerHTML += `The Fibonacci of  
            <b>${result[i].number}</b>
             is  
             <b>${result[i].result}</b>
            . Calculated at: 
            <b>${new Date(result[i].createdDate)}</b>`;

          /*
          const r = i;
          const createdAt = getCreatedAt(r.createdDate);
          var node = document.createElement("div");
          node.innerHTML = `<div>The Fibonacci of <b> ${r.number}</b> is <b>${r.result}</b> Calculated at: ${createdAt} </div>`;
          node.classList.add("resultItem");
          document.getElementById("list").appendChild(node);
          console.log(result[i]);
          console.log(n);
          console.log(r.number);
          */
        }
      }
    });
}
