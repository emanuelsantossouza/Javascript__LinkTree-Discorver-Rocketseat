// O MEU JEITO DE FAZER!!!
/* let pegandoThemaModel = document.querySelector('html').classList.value
// console.log(pegandoThemaModel);

// function toggleMode() {
//   if (pegandoThemaModel === 'light') {
//     document.querySelector('html').classList.remove('light');
//     pegandoThemaModel = ''
//   } else {
//     document.querySelector('html').classList.add('light');
//     pegandoThemaModel = 'light'
//   }
} */

// O JEITO DO DISCOVER

function toggleMode() {
  const html = document.documentElement
  const imgProfile = document.getElementById('profile').querySelector('img');
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    imgProfile.setAttribute('src', './assets/avatar-light.png');
  } else {
    imgProfile.setAttribute('src', './assets/avatar.png');
  }

  /* Jeito Dificil sem conhecer o javascript e seus atributos
// if (html.classList.contains('light')) {
//   html.classList.remove('light');
// } else {
//   html.classList.add('light');
// }
*/
}