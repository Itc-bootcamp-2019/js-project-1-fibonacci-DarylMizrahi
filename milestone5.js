let mybutton = document.getElementById("myBtn");
let result = document.getElementById("result");
mybutton.addEventListener("click", getFib);

function getFib() {
  let newnumber = document.getElementById("value1").value;

  fetch("http://localhost:5050/fibonacci/" + newnumber)
    .then(response => {
      console.log(response.json());

      return response.json();
    })
    .then(data => {
      //console.log(data);
      result.innerHTML = data.result;
    });
}
