let lastScroll = 0
const nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll) {
    // Se está rolando pra baixo → esconde o nav
    nav.style.top = "-120px"
    nav.style.transition = '0.8s' // ajuste conforme a altura do seu nav
  } else {
    // Se está rolando pra cima → mostra o nav
    nav.style.top = "0"
  }

  lastScroll = currentScroll
})



let person = {
    name: 'Cauan',
    age: 21,
    email: 'cauancbd@gmail.com'
}

let listaCoisas = ['Banana', 'Maça', 'Abacate']

console.log(person)
console.log(listaCoisas)
console.log(listaCoisas[1])

listaCoisas.push('Limão')
listaCoisas.sort()
console.log(listaCoisas)

// let num = 1

// while(num <= 10) {
//     console.log(num)
//     num++
// }

var listaFuncionarios = ['Jorge', 'Cauan', 'João', 'Tiago']


listaFuncionarios.forEach(function(valor, indice, array) {
    console.log(valor, indice)
})


if (listaFuncionarios.indexOf('Jorge') === -1) {
    console.log('Não encontrado')
} else {
    console.log('Encontrado!')
}

for (var i = 1; i <= 5; i++) {
    console.log(i)
}

var listaMotos = [
    AltasCC = ['700', '800', '900'],
    MediasCC = ['250', '300', '400']
]


var numRandom = Math.random() * 10
numRandom = Math.round(numRandom)
console.log(numRandom)
