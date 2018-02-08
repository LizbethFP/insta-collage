window.addEventListener('load', () => {
  const divContainer1Drop = document.getElementById('div1');
  const divContainer2Drop = document.getElementById('div2');
  const divContainer3Drop = document.getElementById('div3');
  const divContainer1DragOver = document.querySelector('.div-1');
  const divContainer2DragOver = document.querySelector('.div-2');
  const divContainer3DragOver = document.querySelector('.div-3');
  const imgToDrag1 = document.getElementById('drag1');
  const imgToDrag2 = document.getElementById('drag2');
  const imgToDrag3 = document.getElementById('drag3');
  const imgToDrag4 = document.getElementById('drag4');
  const imgToDrag5 = document.getElementById('drag5');
  const imgToDrag6 = document.getElementById('drag6');
  const imgToDrag7 = document.getElementById('drag7');

  /* PERMITIENDO SOLTAR */
  let allowDrop = (event) => {
    event.preventDefault();
  };

  /* ARRASTRANDO ELEMENTO */
  let drag = (event) => {
    event.dataTransfer.setData('text', event.target.id);
  };

  /* SOLTANDO ELEMENTO*/
  let dropImg = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
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
