//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div')
document.body.appendChild(newDiv)
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement('div')
let newP = document.createElement('p')
newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)

//2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let parrafo = document.createElement('p')
  newDiv3.appendChild(parrafo)
}
document.body.appendChild(newDiv3)
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let p1 = document.createElement('p')
p1.innerText = 'Soy dinámico!'
document.body.appendChild(p1)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here')
h2.innerText = 'Wubba Lubba dub dub'

//2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const app = apps[i]
  const li = document.createElement('li')
  li.innerText = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodesToRemove = document.querySelectorAll('.fn-remove-me')
nodesToRemove.forEach((node) => node.remove())

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll('div')
const middleP = document.createElement('p')
middleP.innerText = 'Voy en medio!'
allDivs[0].after(middleP)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDivsToInsert = document.querySelectorAll('.fn-insert-here')
allDivsToInsert.forEach((div) => {
  const pInside = document.createElement('p')
  pInside.innerText = 'Voy dentro!'
  div.appendChild(pInside)
})
