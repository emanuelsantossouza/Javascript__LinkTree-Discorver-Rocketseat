let darkThema = true
const pegandoSwitch = document.getElementById('switch');
const pegandoTack = document.getElementById('raiz');


pegandoSwitch.addEventListener('click', function () {
  console.log('Clicou aquiii');
});

pegandoSwitch.addEventListener("click", function () {
  console.log("clicou aqui");
  if (!darkThema) {
    pegandoTack.classList.add("light");
  }
});
