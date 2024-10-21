//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (let i = 0; i < countries.length; i++) {
  const country = countries[i]
  const li = document.createElement('li')
  li.innerText = country
  ul.appendChild(li)
}
document.body.appendChild(ul)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const del = document.querySelector('.fn-remove-me')
del.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const div = document.querySelector('body div[data-function="printHere"]')
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ul2 = document.createElement('ul')
for (let x = 0; x < cars.length; x++) {
  const car = cars[x]
  const li2 = document.createElement('li')
  li2.innerText = car
  ul2.appendChild(li2)
  div.appendChild(ul2)
}
document.body.appendChild(div)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countriesWithImages.forEach((item) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = item.title
  const img = document.createElement('img')
  img.src = item.imgUrl
  //1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
  const btnRemove = document.createElement('button')
  btnRemove.textContent = 'Eliminar este elemento'
  btnRemove.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(btnRemove)
  document.body.appendChild(div)
})
//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const btn = document.createElement('button')
btn.textContent = 'Eliminar último elemento'
btn.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})
document.body.appendChild(btn)
