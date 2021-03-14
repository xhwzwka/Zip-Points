var zp0 = 0;
var zp1 = 0;
var zp2 = 0;
var zp3 = 0;
var prestigee = 0;

function increment() {
  zp0++;
  document.getElementById("c0").innerHTML = zp0;
}

function convert() {
  if (zp0 > 9) {
    if (zp1 > 9) {
      if (zp2 > 9) {
        zp2 -= 10;
        zp3++;
        document.getElementById("c2").innerHTML = zp2;
        document.getElementById("c3").innerHTML = zp3;
      } else {
        zp1 -= 10;
        zp2++;
        document.getElementById("c1").innerHTML = zp1;
        document.getElementById("c2").innerHTML = zp2;
      }
    } else {
      zp0 -= 10;
      zp1 += 1;
      document.getElementById("c0").innerHTML = zp0;
      document.getElementById("c1").innerHTML = zp1;
    }
  }
}

function prestige() {
  if (zp2 > 0) {
    zp0 = 0;
    zp1 = 0;
    zp2 = 0;
    prestigee += 100;
  }
}

function tab(numbr) {
  document.getElementById("tab0").style.display = "none";
  document.getElementById("tab4").style.display = "none";
  document.getElementById("tab" + numbr).style.display = "inline-block";
}
