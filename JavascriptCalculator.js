function calculator (input1, input2, action) {

  var result; 
  
  if (action === "multiply") {
    result = input1 * input2;
    }
  
  if (action === "divide") {
    result = input1 / input2;
    }
  
  if (action === "add") {
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    result = input1 + input2;
    }
  
  if (action === "subtract") {
    result = input1 - input2;
    }
  
  return result;
}

//calculator(12, 10, "divide");

var input1;
var input2;
var action;

$(document).ready(function(){  
  
      $("#equal").click(function(){
      input2 = $("p#paraScreen").html();

      $("p#paraScreen").html(calculator(input1, input2, action));
        
      input1 = undefined;
      input2 = undefined;
    });
  
     $("#CE").click(function(){
        $("p#paraScreen").html("");
    });
  
    $("#AC").click(function(){
        $("p#paraScreen").html("");
      input1 = undefined;
      input2 = undefined;  
    });
  
        $("#dot").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"    ) {
        document.getElementById("paraScreen").innerHTML = "0.";
      }
      
       else  {  $("p#paraScreen").append(".");  }
    });

  
      $("#zero").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-" ) {
        document.getElementById("paraScreen").innerHTML = "0";
      }
      
       else  {  $("p#paraScreen").append("0");  }
    });
  
      $("#one").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "1";
      }
      
       else  {  $("p#paraScreen").append("1");  }
    });
  
    $("#two").click(function(){
             
          if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "2";
      }
      
       else  {  $("p#paraScreen").append("2");  }
    });
  
    $("#three").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "3";
      }
      
       else  {  $("p#paraScreen").append("3");  }
    });
  
  
  
    $("#four").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "4";
      }
      
       else  {  $("p#paraScreen").append("4");  }
    });
  
    $("#five").click(function(){
             
          if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "5";
      }
      
       else  {  $("p#paraScreen").append("5");  }
    });
  
    $("#six").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "6";
      }
      
       else  {  $("p#paraScreen").append("6");  }
    });
  
  
  
    $("#seven").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "7";
      }
      
       else  {  $("p#paraScreen").append("7");  }
    });
  
    $("#eight").click(function(){
             
          if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "8";
      }
      
       else  {  $("p#paraScreen").append("8");  }
    });
  
    $("#nine").click(function(){
      
           if ( document.getElementById("paraScreen").innerHTML === "X" || document.getElementById("paraScreen").innerHTML === "÷" || document.getElementById("paraScreen").innerHTML === "+" || document.getElementById("paraScreen").innerHTML === "-"  ) {
        document.getElementById("paraScreen").innerHTML = "9";
      }
      
       else  {  $("p#paraScreen").append("9");  }
    });
  
    $("#multiply").click(function(){
      
      action = "multiply";
      
      if (input1 !== undefined) { 
        input2 = $("p#paraScreen").html();
        input1 = calculator(input1, input2, action);
      }
      
      if (input1 === undefined) {
      input1 = $("p#paraScreen").html();
      }
      
      $("p#paraScreen").html("X");
      
    });
  
  $("#divide").click(function(){
      
      action = "divide";
      
      if (input1 !== undefined) { 
        input2 = $("p#paraScreen").html();
        input1 = calculator(input1, input2, action);
      }
      
      if (input1 === undefined) {
      input1 = $("p#paraScreen").html();
      }
      
      $("p#paraScreen").html("÷");
      
    });
  
  $("#subtract").click(function(){
      
      action = "subtract";
      
      if (input1 !== undefined) { 
        input2 = $("p#paraScreen").html();
        input1 = calculator(input1, input2, action);
      }
      
      if (input1 === undefined) {
      input1 = $("p#paraScreen").html();
      }
      
      $("p#paraScreen").html("-");
      
    });
  
  $("#add").click(function(){
      
      action = "add";
      
      if (input1 !== undefined) { 
        input2 = $("p#paraScreen").html();
        input1 = calculator(input1, input2, action);
      }
      
      if (input1 === undefined) {
      input1 = $("p#paraScreen").html();
      }
      
      $("p#paraScreen").html("+");
      
    });
  
      $("#percentage").click(function(){
      
      document.getElementById("paraScreen").innerHTML = document.getElementById("paraScreen").innerHTML * 0.01;
      
    });
});
