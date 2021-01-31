var zp0 = 0;
var zp1 = 0;
var zp2 = 0;
var prestigee = 0;

function increment() {
  zp0 += 1;
  document.getElementById("c0").innerHTML = zp0;
}

function convert() {
  if (zp0 >= 10) {
    if (zp1 >= 9) {
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

function prestige() {
  if (zp2 >= 1) {
    zp0 = 0;
    zp1 = 0;
    zp2 = 0;
    prestigee += 100;
  }
}

function tab(numbr) {
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById("tab" + numbr).style.display = "inline-block";
}

while (true) {
  if (zp2 >= 1) {
    document.getElementById("prestigeButton").innerHTML = "Prestige for 100 P^";
  } else {
    document.getElementById("prestigeButton").innerHTML = "Reach a ^2 to prestige";
  }
}
