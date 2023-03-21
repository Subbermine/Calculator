var str = "",
  showstr = "",
  brac = false;
function number(z) {
  str += z;
  showstr += z;
  document.getElementById("screen").innerHTML = showstr;
}
function back() {
  let z = str.slice(0, str.length - 1);
  str = z;
  let d = str.slice(0, str.length - 1);
  showstr = d;
  document.getElementById("screen").innerHTML = showstr;
}
function operation(z) {
  switch (z) {
    case "*":
      showstr += "X";
      break;
    default:
      showstr += z;
  }
  str += z;
  document.getElementById("screen").innerHTML = showstr;
}
function ac() {
  str = "";
  showstr = "";
  document.getElementById("screen").innerHTML = "";
}
function show() {
  document.getElementById("screen").innerHTML = eval(str);
  let z = eval(str);
  str = z;
  showstr = z;
}
function bracket() {
  if (!brac) {
    str += "(";
    showstr += "(";
    brac = true;
  } else {
    str += ")";
    showstr += ")";
    brac = false;
  }
  document.getElementById("screen").innerHTML = showstr;
}
function point() {
  str += ".";
  showstr += ".";
  document.getElementById("screen").innerHTML = showstr;
}
