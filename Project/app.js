var txt1 = "What a very";
var txt2 = "nice day";
document.getElementById("demo").innerHTML = txt1 + txt2;

let x = 10;
let y = 20;
let z = x + y;
document.getElementById("demo").innerHTML = z;

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("demo").innerHTML = value;   

  let m = 100 / "Apple";
  document.getElementById("demo").innerHTML = isNaN(x);