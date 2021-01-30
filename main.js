var zp0 = 0;
var zp1 = 0;
var zp2 = 0;

function inc() {
  zp0 += 1;
  document.getElementById("c0").innerHTML = zp0;
}

function convert() {
  if zp0 >= 10 {
    if zp1 >= 10 {
      zp1 -= 10;
      zp2 += 1;
      document.getElementById("c1").innerHTML = zp1;
      document.getElementById("c2").innerHTML = zp2;
    } else {
      zp0 -= 10;
      zp1 += 1;
      document.getElementById("c0").innerHTML = zp0;
      document.getElementById("c1").innerHTML = zp1;
    }
  }
}
