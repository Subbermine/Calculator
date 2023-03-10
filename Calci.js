// 1-multiply
// 2-divide
// 3-add
// 4-subtract
// 5-Percentage
// 0-nothing
var num1 = 0,
  num2 = 0,
  b = false,
  ans = 0,
  opt = 0,
  p = false,
  pvar = 1;
function ac() {
  b = false;
  opt = 0;
  ans = 0;
  num1 = 0;
  num2 = 0;
  pvar = 1;
  p = false;
  document.getElementById("screen").innerHTML = "";
}
function operation(z) {
  switch (z) {
    case 1:
      opt = z;
      document.getElementById("screen").innerHTML = num1 + "X";
      break;
    case 2:
      opt = z;
      document.getElementById("screen").innerHTML = num1 + "/";
      break;
    case 3:
      opt = z;
      document.getElementById("screen").innerHTML = num1 + "+";
      break;
    case 4:
      opt = z;
      document.getElementById("screen").innerHTML = num1 + "-";
      break;
    case 5:
      opt = z;
      document.getElementById("screen").innerHTML = num1 + "%";
  }
  b = true;
  p = false;
  pvar = 1;
}
function show() {
  switch (opt) {
    case 1:
      ans = num1 * num2;
      break;
    case 2:
      ans = num1 / num2;
      break;
    case 3:
      ans = num1 + num2;
      break;
    case 4:
      ans = num1 - num2;
      break;
    case 5:
      ans = (num1 * num2) / 100;
      break;
    default:
      ans = num1;
  }

  document.getElementById("screen").innerHTML = ans;
  num1 = ans;
  num2 = 0;
}
function back() {
  if (num2 == 0 && opt != 0) {
    b = false;
    opt = 0;
    document.getElementById("screen").innerHTML = num1;
  } else if (b) {
    var last = num2 % 10;
    num2 -= last;
    num2 /= 10;
    decidor();
  } else {
    var last = num1 % 10;
    num1 -= last;
    num1 /= 10;
    document.getElementById("screen").innerHTML = num1;
  }
  if (num1 == 0 && num2 == 0) document.getElementById("screen").innerHTML = "";
}
function decidor() {
  switch (opt) {
    case 1:
      document.getElementById("screen").innerHTML = num1 + "X" + num2;
      break;
    case 2:
      document.getElementById("screen").innerHTML = num1 + "/" + num2;
      break;
    case 3:
      document.getElementById("screen").innerHTML = num1 + "+" + num2;
      break;
    case 4:
      document.getElementById("screen").innerHTML = num1 + "-" + num2;
      break;
    case 5:
      document.getElementById("screen").innerHTML = num1 + "%" + num2;
  }
}
function number(z) {
  switch (b) {
    case true:
      if (p) {
        pvar /= 10;
        z *= pvar;
      } else num2 *= 10;
      num2 += z;
      decidor();
      break;
    case false:
      if (p) {
        pvar /= 10;
        z *= pvar;
      } else {
        num1 *= 10;
      }
      num1 += z;
      document.getElementById("screen").innerHTML = num1;
  }
}
function point() {
  p = true;
}
