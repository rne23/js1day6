// Toggle Images

//Elon Pic
var button1 = document.getElementById('elon');
var pic1 = document.getElementById('elon-pic');

button1.addEventListener('click', function(){
  console.log('hello');
  if (pic1.classList.contains('hide')){
    pic1.classList.add('show');
    pic1.classList.remove('hide');
  } else {
    pic1.classList.remove('show');
    pic1.classList.add('hide');
  };
});

//Tim Pic
var button2 = document.getElementById('tim');
var pic2 = document.getElementById('tim-pic');

button2.addEventListener('click', function(){
  console.log('hello');
  if (pic2.classList.contains('hide')){
    pic2.classList.add('show');
    pic2.classList.remove('hide');
  } else {
    pic2.classList.remove('show');
    pic2.classList.add('hide');
  };
});

//Jeff Pic
var button3 = document.getElementById('jeff');
var pic3 = document.getElementById('jeff-pic');

button3.addEventListener('click', function(){
  console.log('hello');
  if (pic3.classList.contains('hide')){
    pic3.classList.add('show');
    pic3.classList.remove('hide');
  } else {
    pic3.classList.remove('show');
    pic3.classList.add('hide');
  };
});
