Array.from(document.getElementsByClassName("operator")).forEach(function(x){
    x.onclick = function(){
      let display = document.getElementById("display").innerHTML;
      if (display){
        if (display[display.length - 1] == " "){
          document.getElementById("display").innerHTML = display.substring(0, display.length-3) + " " + this.innerHTML + " ";
        } else { 
          document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + " " + this.innerHTML + " ";
        }
      }
    }
});

Array.from(document.getElementsByClassName("numbers")).forEach(function(x){
    x.onclick = function(){
      if (document.getElementById("display").innerHTML == "0"){
        document.getElementById("display").innerHTML = this.innerHTML;
      } else {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + this.innerHTML;
      }
    }
});


document.getElementById("clear").onclick = function(){
  document.getElementById("display").innerHTML = "0";
};

document.getElementById("allclear").onclick = function(){
  document.getElementById("display").innerHTML = "";
};

document.getElementById("decimal").onclick = function(){
  if (document.getElementById("display").innerHTML.length == 0){
    document.getElementById("display").innerHTML = "0."
  } else {
    let display = document.getElementById("display").innerHTML; 
    if (display[display.length-1] != ""){
      let arr = display.split(" ");
      let dots = arr[arr.length-1].split("").filter((x) => x == ".");
      if (dots.length == 0){
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + ".";
      }
    }
  }
};

document.getElementById("percentage").onclick = function(){
  if (document.getElementById("display").innerHTML){
    document.getElementById("display").innerHTML = (parseFloat(document.getElementById("display").innerHTML) / 100).toString();
  }
};

document.getElementById("equals").onclick = function(){
  if(document.getElementById("display").innerHTML){
    let display = document.getElementById("display").innerHTML;
    let string;
    if (display[display.length] == " "){
      string = display.substring(0, display.length - 3);
    } else {
      string = display;
    }
    document.getElementById("display").innerHTML = calculator(string);
  }
};


//following function example: ("2 / 2 + 3 * 4 - 6") # => 7
function calculator(string) {

  let arr = string.split(" ");

  //do multiplications and divisions
  for (let i = 1; i < arr.length; i) {
    if (arr[i] == "X") {
      arr[i-1] = parseFloat(arr[i-1]) * parseFloat(arr[i+1]);
      arr.splice(i, 2);
    } else if (arr[i] == "÷") {
      arr[i-1] = parseFloat(arr[i-1]) / parseFloat(arr[i+1]);
      arr.splice(i, 2);
    } else {
      i = i + 2;
    }
  }

  //do additions and substractions until down to one number
  function calculate(){
    arr[1] == "+" ? arr[0] = parseFloat(arr[0]) + parseFloat(arr[2]) : arr[0] = parseFloat(arr[0]) - parseFloat(arr[2]);
    arr.splice(1, 2);

    if (arr.length > 2) {
      calculate();
    }
  }

  if (arr.length > 2) {
    calculate();
  }

  return arr.toString();
}
