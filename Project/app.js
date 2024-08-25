var txt1 = "What a very";
var txt2 = "nice day";
document.getElementById("demo").innerHTML = txt1 + txt2;

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("demo").innerHTML = value;