// Uppercase Your Name
var submit = document.getElementById('submit1');

submit.addEventListener('click', function(event){
  event.preventDefault();
  var name = document.getElementById('my-name');
  var a = name.value.substring(0,1).toUpperCase();
  var b = a + name.value.substring(1);
  alert(b);
});
