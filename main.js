function add() {
  var lastValue = 0,
    temp = 0;
  lastValue = f.inputfield.value;
  temp = lastValue.charAt(lastValue.length - 1);
  //alert(temp);
  if (temp == "+" || temp == "-" || temp == "/" || temp == "*") {
    f.inputfield.value = lastValue.substring(0, lastValue.length - 1);
    f.inputfield.value += "+";
  } else {
    f.inputfield.value += "+";
  }
}
function sub() {
  var lastValue = 0,
    temp = 0;
  lastValue = f.inputfield.value;
  temp = lastValue.charAt(lastValue.length - 1);
  //alert(temp);
  if (temp == "+" || temp == "-" || temp == "/" || temp == "*") {
    f.inputfield.value = lastValue.substring(0, lastValue.length - 1);
    f.inputfield.value += "-";
  } else {
    f.inputfield.value += "-";
  }
}
function mult() {
  var lastValue = 0,
    temp = 0;
  lastValue = f.inputfield.value;
  temp = lastValue.charAt(lastValue.length - 1);
  //alert(temp);
  if (temp == "+" || temp == "-" || temp == "/" || temp == "*") {
    f.inputfield.value = lastValue.substring(0, lastValue.length - 1);
    f.inputfield.value += "*";
  } else {
    f.inputfield.value += "*";
  }
}
function div() {
  var lastValue = 0,
    temp = 0;
  lastValue = f.inputfield.value;
  temp = lastValue.charAt(lastValue.length - 1);
  //alert(temp);
  if (temp == "+" || temp == "-" || temp == "/" || temp == "*") {
    f.inputfield.value = lastValue.substring(0, lastValue.length - 1);
    f.inputfield.value += "/";
  } else {
    f.inputfield.value += "/";
  }
}
