var music = new Audio();
music.src = "audio/dec.mp3";
var lg = document.getElementById('logo');
let btnws = document.getElementById('btn1');
let btnw = document.getElementById('btn');
btnw.addEventListener('click', function(){
  music.play();
  btnw.classList.remove('slideInRight');
  btnw.classList.add('slideOutRight');
  btnws.classList.remove('slideOutLeft');
  btnws.classList.add('slideInLeft');
  lg.classList.add('animated');
  lg.classList.add('jello');
  lg.classList.add('infinite');
});
btnws.addEventListener('click', function(){
  music.pause();
  btnws.classList.remove('slideInLeft');
  btnw.classList.remove('slideOutRight');
  btnws.classList.add('slideOutLeft');
  btnw.classList.add('slideInRight');
  lg.classList.remove('animated');
  lg.classList.remove('jello');
  lg.classList.remove('infinite');
});
