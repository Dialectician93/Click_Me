// let button = document.getElementById("color-button");

// button.addEventListener("click", function(){
//   let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//   button.style.backgroundColor = randomColor;
// });



const button = document.querySelector(`button`);
const body = document.querySelector(`body`);



button.addEventListener(`click`, changeBackgroundcolor);

function changeBackgroundcolor(){
  const x = Math.round(Math.random()*255)
  const y = Math.round(Math.random()*255)
  const z = Math.round(Math.random()*255)
  const colors = `rgb(${x},${y},${z})`

  body.style.backgroundColor = colors
  const a = Math.round(Math.random()*255)
  const b = Math.round(Math.random()*255)
  const c = Math.round(Math.random()*255)
  const colors1 = `rgb(${a},${b},${c})`
  button.style.backgroundColor = colors1

}