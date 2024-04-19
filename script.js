document.getElementById("btn").addEventListener("click", calc);

function calc() {
  var b1 = +document.getElementById("b1").value;
  var b2 = +document.getElementById("b2").value;
  var h = +document.getElementById("h").value;
  var r = +document.getElementById("r").value;

  var output = (1 / 2) * (b1 + b2) * h;
  output = output.toFixed(r);

  document.getElementById("output").innerHTML = output;
}
