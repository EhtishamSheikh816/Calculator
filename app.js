function num(e) {
  let getInp = document.getElementById("inp");
  getInp.value += e;
}

function eql() {
  let getInp = document.getElementById("inp");
  if (getInp.value == "") {
    alert("Please enter a value!");
    getInp.value = 0;
  }
  getInp.value = eval(getInp.value);
}

function del() {
  let getInp = document.getElementById("inp");
  getInp.value = getInp.value.slice(0, -1);
}

function ac() {
  let getInp = document.getElementById("inp");
  getInp.value = "";
}

function opt(operator) {
  let getInp = document.getElementById("inp");
  let lastOpt = getInp.value.slice(-1);
  if (
    lastOpt == "+" ||
    lastOpt == "-" ||
    lastOpt == "*" ||
    lastOpt == "/" ||
    lastOpt == "%"
  ) {
    getInp.value = getInp.value.slice(0, -1) + operator;
  } else {
    getInp.value += operator;
  }
}
