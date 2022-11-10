const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
})

h1.innerHTML = 'Cosita Linda <br> te amo'
//console.log(h1.getAttribute('class'))
//h1.setAttribute('class','rojo')

h1.classList.add('Rojo')
h1.classList.remove('verde')

input.value = "Eres preciosa"

const img = document.createElement('img')
img.setAttribute('src','https://www.geekmi.news/__export/1650553082065/sites/debate/img/2022/04/21/trixie1_1.jpg_54404068.jpg')

pid.append(img)