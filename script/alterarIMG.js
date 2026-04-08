function trocarImagens() {
  const front = document.getElementById("imgFront");
  const back = document.getElementById("imgBack");

  const temp = front.src;
  front.src = back.src;
  back.src = temp;
}

// troca a cada 3 segundos (3000ms)
setInterval(trocarImagens, 6000);