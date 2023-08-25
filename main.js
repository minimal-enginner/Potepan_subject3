let result = document.getElementById("result");
let mode = 'integer_mode'; //最初は整数入力モード

function edit(elem) {
  if (result.value == "0" || result.value == "00" ) {
      result.value = elem.value;
  }else{
  result.value = result.value + elem.value;
  }
}

function arithmetic(elem) {
  if (result.value.slice(-1) === "+" ||
      result.value.slice(-1) === "-" ||
      result.value.slice(-1) === "*" ||
      result.value.slice(-1) === "/" ||
      result.value.slice(-1) === "." ) {
    return;
  }else{
  mode = 'integer_mode'; //整数入力モード
  result.value = result.value + elem.value;
}
}

function period(elem) {
  if (result.value.slice(-1) === ".") {
    return;
  }else if(mode == 'decimal_mode'){//小数点モード
    return;
  }else{
  mode = 'decimal_mode'; //小数点モード
  result.value = result.value + elem.value;
}
}
  
function calc() {
  mode = 'integer_mode'; //整数入力モード
  result.value = new Function("return " + result.value)();
}

function update() {
  mode = 'integer_mode'; //整数入力モード
  result.value = "";
}