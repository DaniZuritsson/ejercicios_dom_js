//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document
  .getElementById('btnToClick')
  .addEventListener('click', function (event) {
    console.log(event)
  })

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.querySelector('.focus').addEventListener('focus', function () {
  console.log(this.value)
})
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.querySelector('.value').addEventListener('input', function () {
  console.log(this.value)
})
//1.4 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const ul = document.createElement('ul')
for (let i = 0; i < albums.length; i++) {
  const album = albums[i]
  const li = document.createElement('li')
  li.innerText = album
  ul.appendChild(li)
}
document.body.appendChild(ul)
