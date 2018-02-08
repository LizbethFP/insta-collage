'use strict';

window.addEventListener('load', function () {
  var divContainer1Drop = document.getElementById('div1');
  var divContainer2Drop = document.getElementById('div2');
  var divContainer3Drop = document.getElementById('div3');
  var divContainer1DragOver = document.querySelector('.div-1');
  var divContainer2DragOver = document.querySelector('.div-2');
  var divContainer3DragOver = document.querySelector('.div-3');
  var imgToDrag1 = document.getElementById('drag1');
  var imgToDrag2 = document.getElementById('drag2');
  var imgToDrag3 = document.getElementById('drag3');
  var imgToDrag4 = document.getElementById('drag4');
  var imgToDrag5 = document.getElementById('drag5');
  var imgToDrag6 = document.getElementById('drag6');
  var imgToDrag7 = document.getElementById('drag7');

  /* PERMITIENDO SOLTAR */
  var allowDrop = function allowDrop(event) {
    event.preventDefault();
  };

  /* ARRASTRANDO ELEMENTO */
  var drag = function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  };

  /* SOLTANDO ELEMENTO*/
  var dropImg = function dropImg(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
  };

  divContainer1Drop.addEventListener('drop', dropImg);
  divContainer2Drop.addEventListener('drop', dropImg);
  divContainer3Drop.addEventListener('drop', dropImg);
  divContainer1DragOver.addEventListener('dragover', allowDrop);
  divContainer2DragOver.addEventListener('dragover', allowDrop);
  divContainer3DragOver.addEventListener('dragover', allowDrop);
  imgToDrag1.addEventListener('dragstart', drag);
  imgToDrag2.addEventListener('dragstart', drag);
  imgToDrag3.addEventListener('dragstart', drag);
  imgToDrag4.addEventListener('dragstart', drag);
  imgToDrag5.addEventListener('dragstart', drag);
  imgToDrag6.addEventListener('dragstart', drag);
  imgToDrag7.addEventListener('dragstart', drag);
});