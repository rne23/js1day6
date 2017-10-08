// Addition
var inp1 = document.getElementById('input1');
var inp2 = document.getElementById('input2');
var btn1 = document.getElementById('submit1');

btn1.addEventListener('click', function(){
  var a = parseInt(inp1.value) + parseInt(inp2.value);
  alert(a);
});
