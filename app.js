// varibles
// productos varibles
const img = document.getElementById('img');
let text = document.getElementById('text');
const pci = document.getElementById('price');
// nav varibles
const toggleNav = document.getElementById('toggle');
const ul = document.getElementById('ul');
const barra1 = document.getElementById('barras1');
const barra2 = document.getElementById('barras2');
const barra3 = document.getElementById('barras3');
// funcionalidad toggle
toggleNav.addEventListener('click', () => {
  // console.log('funcina el click');
  ul.classList.toggle("active");
  barra1.classList.toggle("active");
  barra2.classList.toggle("active");
  barra3.classList.toggle("active");
})
// productos del archivo JSON
fetch('/data.json').then(response => response.json()).then(data => {
  const datos = data.bikes;
  // creacion de contenedores
  for (let i = 0; i < datos.length; i++){
    const conteiner = document.createElement('div');
    conteiner.setAttribute('id', `cont-${i}`);
    const bikes = document.getElementById('bikes');
    bikes.appendChild(conteiner);
  }
    // funcionalidad productos JSON
  for (let i = 0; i < datos.length; i++) {
    // console.log(datos[i].name);
    // imagenes
    const product = document.createElement('img');
    product.src = datos[i].img;
    product.setAttribute('id', 'img');
    const index = i % 8;
    const conteiner = document.getElementById(`cont-${i}`);
    conteiner.appendChild(product);
    // titulos
    const name = document.createElement('h4')
    name.textContent = datos[i].name;
    name.setAttribute('id', 'text');
    conteiner.appendChild(name);
    // descripciones
    const descrip = document.createElement('h5')
    descrip.textContent = datos[i].description;
    descrip.setAttribute('id', 'description');
    conteiner.appendChild(descrip);
    // precios
    const price = document.createElement('p')
    price.textContent = datos[i].price;
    price.setAttribute('id', 'price');
    conteiner.appendChild(price);
  }
  console.log(bikes);
})