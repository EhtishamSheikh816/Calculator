function num(e) {
  let getInp = document.getElementById("inp");
  getInp.value += e;
  console.log(getInp);
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

function onOff() {
  let getInp = document.getElementById("inp");
}
