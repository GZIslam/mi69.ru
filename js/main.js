var music = new Audio();
music.src = "audio/dec.mp3";
var lg = document.getElementById('logo');
let btnws = document.getElementById('btn1');
let btnw = document.getElementById('btn');
btnw.addEventListener('click', function(){
  music.play();
  btnw.classList.remove('slideInRight');
  btnw.style.opacity = '0';
  btnws.style.opacity = '1';
  btnw.classList.add('slideOutRight');
  btnws.classList.remove('slideOutLeft');
  btnws.classList.add('slideInLeft');
  lg.classList.add('pulse');
});
btnws.addEventListener('click', function(){
  music.pause();
  btnws.classList.remove('slideInLeft');
  btnw.classList.remove('slideOutRight');
  btnws.style.opacity = '0';
  btnw.style.opacity = '1';
  btnws.classList.add('slideOutLeft');
  btnw.classList.add('slideInRight');
  lg.classList.remove('pulse');
});
