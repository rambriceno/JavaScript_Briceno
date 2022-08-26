let clave;
let valor;
let modeloInicial;

//Datos del producto
for (let i = 0; i < sessionStorage.length; i++) {
  if(sessionStorage.key(i) == "modelo"){
    clave = sessionStorage.key(i);
    valor = JSON.parse(sessionStorage.getItem(clave));
  }

  switch (valor) {
    case 14:
      modeloInicial = "13 Pro";
      iPhoneModelos = [
        {modelo: '13 Pro', pantalla: '6,1"'},
        {modelo: '13 Pro Max', pantalla: '6,7"'}
      ]
      
      iPhoneColores = [
        { color: "Verde Alpino", imagen: "../img/iphone-13-pro-alpinegreen.jfif" },
        { color: "Plata", imagen: "../img/iphone-13-pro-silver.jfif" },
        { color: "Oro", imagen: "../img/iphone-13-pro-gold.jfif" },
        { color: "Grafito", imagen: "../img/iphone-13-pro-graphite.jfif" },
        { color: "Azul Alpino", imagen: "../img/iphone-13-pro-sierrablue.jfif" }
      ];
      
      iPhoneCapacidades = [
        { modelo: "13 Pro", capacidad: "128 GB", precio: 1159 },
        { modelo: "13 Pro", capacidad: "256 GB", precio: 1279 },
        { modelo: "13 Pro", capacidad: "512 GB", precio: 1509 },
        { modelo: "13 Pro", capacidad: "1 TB", precio: 1739 },
        { modelo: "13 Pro Max", capacidad: "128 GB", precio: 1259 },
        { modelo: "13 Pro Max", capacidad: "256 GB", precio: 1379 },
        { modelo: "13 Pro Max", capacidad: "512 GB", precio: 1609 },
        { modelo: "13 Pro Max", capacidad: "1 TB", precio: 1839 }
      ];

      botonesColores = [
        {color: "Verde Alpino", img: "../img/iphone-13-pro-finish-green-202203.jfif" },
        {color: "Plata", img: "../img/iphone-finish-silver-2021.jfif"},
        {color: "Oro", img: "../img/iphone-finish-gold-2021.jfif"},
        {color: "Grafito", img: "../img/iphone-finish-graphite-2021.jfif"},
        {color: "Azul Alpino", img: "../img/iphone-finish-blue-2021.jfif"}
      ]
      break;
      case 13:
      modeloInicial = "13";
      iPhoneModelos = [
        {modelo: '13', pantalla: '6,1"'}
      ]
      
      iPhoneColores = [
        { color: "Verde", imagen: "../img/iphone-13-finish-select-202207-6-1inch-green.jfif" },
        { color: "Rosado", imagen: "../img/iphone-13-finish-select-202207-6-1inch-pink.jfif" },
        { color: "Azul", imagen: "../img/iphone-13-finish-select-202207-6-1inch-blue.jfif" },
        { color: "Medianoche", imagen: "../img/iphone-13-finish-select-202207-6-1inch-midnight.jfif" },
        { color: "Blanco Estrella", imagen: "../img/iphone-13-finish-select-202207-6-1inch-starlight.jfif" },
        { color: "Rojo", imagen: "../img/iphone-13-finish-select-202207-6-1inch-product-red.jfif" }
      ];
      
      iPhoneCapacidades = [
        { modelo: "13", capacidad: "128 GB", precio: 909 },
        { modelo: "13", capacidad: "256 GB", precio: 1029 },
        { modelo: "13", capacidad: "512 GB", precio: 1259 }
      ];

      botonesColores = [
        { color: "Verde", img: "../img/iphone-13-finish-green-202203.jfif" },
        { color: "Rosado", img: "../img/iphone-13-finish-pink-202108.jfif" },
        { color: "Azul", img: "../img/iphone-13-finish-blue-202108.jfif" },
        { color: "Medianoche", img: "../img/iphone-13-finish-midnight-202108.jfif" },
        { color: "Blanco Estrella", img: "../img/iphone-13-finish-starlight-202108.jfif" },
        { color: "Rojo", img: "../img/iphone-13-finish-product-red-202108.jfif" }
      ]
      break;
      case 12:
        modeloInicial = "12";
        iPhoneModelos = [
          {modelo: '12', pantalla: '6,1"'},
        ]
      
        iPhoneColores = [
          { color: "Verde", imagen: "../img/iphone-12-finish-select-202207-6-1inch-green.jfif" },
          { color: "Violeta", imagen: "../img/iphone-12-finish-select-202207-6-1inch-purple.jfif" },
          { color: "Azul", imagen: "../img/iphone-12-finish-select-202207-6-1inch-blue.jfif" },
          { color: "Blanco", imagen: "../img/iphone-12-finish-select-202207-6-1inch-white.jfif" },
          { color: "Negro", imagen: "../img/iphone-12-finish-select-202207-6-1inch-black.jfif" },
          { color: "Rojo", imagen: "../img/iphone-12-finish-select-202207-6-1inch-product-red.jfif" }
        ];
      
        iPhoneCapacidades = [
          { modelo: "12", capacidad: "64 GB", precio: 809 },
          { modelo: "12", capacidad: "128 GB", precio: 859 },
          { modelo: "12", capacidad: "256 GB", precio: 979 }
        ];

        botonesColores = [
          {color: "Verde", img: "../img/finish-green-202010.jfif" },
          {color: "Violeta", img: "../img/finish-purple-202104.jfif"},
          {color: "Azul", img: "../img/finish-blue-202010.jfif"},
          {color: "Blanco", img: "../img/finish-white-202010.jfif"},
          {color: "Negro", img: "../img/finish-black-202010.jfif"},
          {color: "Rojo", img: "../img/finish-red-202010.jfif"}
        ]
      break;
      case 11:
        modeloInicial = "11";
        iPhoneModelos = [
          {modelo: '11', pantalla: '6,1"'},
        ]
        
        iPhoneColores = [
          { color: "Verde", imagen: "../img/iphone-11-finish-select-202207-green.jfif" },
          { color: "Violeta", imagen: "../img/iphone-11-finish-select-202207-purple.jfif" },
          { color: "Blanco", imagen: "../img/iphone-11-finish-select-202207-white.jfif" },
          { color: "Amarillo", imagen: "../img/iphone-11-finish-select-202207-yellow.jfif" },
          { color: "Negro", imagen: "../img/iphone-11-finish-select-202207-black.jfif" },
          { color: "Rojo", imagen: "../img/iphone-11-finish-select-202207-product-red.jfif" }
        ];
        
        iPhoneCapacidades = [
          { modelo: "11", capacidad: "64 GB", precio: 589 },
          { modelo: "11", capacidad: "128 GB", precio: 639 }
        ];

        botonesColores = [
          {color: "Verde", img: "../img/finish-green-201909.jfif" },
          {color: "Violeta", img: "../img/finish-purple-201909.jfif"},
          {color: "Blanco", img: "../img/finish-white-201909.jfif"},
          {color: "Amarillo", img: "../img/finish-yellow-201909.jfif"},
          {color: "Negro", img: "../img/finish-black-201909.jfif"},
          {color: "Rojo", img: "../img/finish-red-201909.jfif"}
        ]
        break;
  
    default:
      break;
  } 
} 

const cantCuotas = [
  { cuota: 1, interes: 0 },
  { cuota: 3, interes: 0 },
  { cuota: 6, interes: 26.5 },
  { cuota: 12, interes: 34 },
];

//Clases - Objetos
class resumenCompra {
  constructor(modelo, capacidad, color, precio, cantCuotas, interes) {
    this.modelo = modelo;
    this.capacidad = capacidad;
    this.color = color;
    this.precio = parseFloat(precio);
    this.cantCuotas = parseInt(cantCuotas);
    this.interes = parseFloat(interes);
  }
}
const resumenCompra1 = new resumenCompra();

//Función para cambiar imagen de iPhone según color
function cambiarImagen(source) {
  document.getElementById("iPhoneColor").src = source;
}

//Funcion para desmarcar con color cuando selecciono una opción
function quitarClase(arrayBotones, clase) {
  arrayBotones.forEach((elemento) => {
    elemento.classList.remove(clase);
  });
}

//Función para crear modelos disponibles 
function crearBotonesModelos(){
  let divModelo = document.querySelector('#modelo');
  let tituloCategoria = document.createElement('h2');
  tituloCategoria.innerHTML = `<span class="textCateg">Modelo.</span> <span class="textCategSub">¿Cuál te conviene?</span>`;
  divModelo.appendChild(tituloCategoria);

  iPhoneModelos.forEach((iPhone) =>{
    let bttnModelo = document.createElement("button");
    bttnModelo.classList.add("btn", "btn-text", "btnModelo");
    bttnModelo.value = `${iPhone.modelo}`;
    bttnModelo.innerHTML = `<h2 class="textButton">iPhone ${iPhone.modelo}</h2>
    <h2 class="textButtonSub">Pantalla de ${iPhone.pantalla}</h2>`;
    divModelo.appendChild(bttnModelo);
  })
}
crearBotonesModelos(); 

//Función para crear botones de colores disponibles
function crearBotonesColores(){
  let divColor = document.querySelector('#color');
  const tituloCategoria = document.createElement('h2');
  tituloCategoria.innerHTML = `<span class="textCateg">Acabado.</span> <span class="textCategSub">Elige tu favorito.</span>`;
  divColor.appendChild(tituloCategoria);

  const divCirculoColores = document.createElement('div');
  divCirculoColores.setAttribute("id", "circuloColores");
  botonesColores.forEach((boton) =>{
    const bttn = document.createElement("button");
    bttn.classList.add("btn", "btn-color");
    bttn.value = `${boton.color}`;
    bttn.innerHTML = `<img src="${boton.img}" class="fotoCirculo" alt="${boton.color}">`
    divCirculoColores.appendChild(bttn);
    divColor.appendChild(divCirculoColores);
  })

  //Cambio de imagen al apretar botón de color
  let buttonColores = document.querySelectorAll(".btn-color");
  for (const button of buttonColores) {
    button.addEventListener("click", () => {
      quitarClase(buttonColores, "btn-seleccionado");
      button.classList.add("btn-seleccionado");
      let colorSelecc = button.value;
      let varianteElegida = iPhoneColores.find(
        (iPhone) => iPhone.color === colorSelecc
      );
      cambiarImagen(varianteElegida.imagen);
      resumenCompra1.color = colorSelecc;
    });
}
}
crearBotonesColores();

//Cambio de precio al apretar botón de modelo
let buttonModelo = document.querySelectorAll(".btnModelo");
for (const button of buttonModelo) {
  button.addEventListener("click", () => {
    quitarClase(buttonModelo, "btn-seleccionado");
    button.classList.add("btn-seleccionado");
    let modeloSelecc = button.value;
    mostrarPrecios(modeloSelecc);
    resumenCompra1.modelo = modeloSelecc;
  });
}

//El formato que le quiero dar el precio con la función Number.
const options = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

//Crear botones con el precio según modelo seleccionado
function mostrarPrecios(modeloSelecc) {
  const contenedorCapacidades = document.getElementById("capacidad");
  contenedorCapacidades.innerHTML = "";
  iPhoneCapacidades.forEach((element) => {
    if (element.modelo == modeloSelecc) {
      const bttn = document.createElement("button");
      bttn.classList.add("btn", "btn-text", "btn-precio");
      bttn.innerHTML = `<h2 class="textButton">${element.capacidad}</h2>
                        <h2 class="textButtonSub">$${Number(
                          element.precio
                        ).toLocaleString("en", options)}</h2>`;
      contenedorCapacidades.appendChild(bttn);
      bttn.value = element.capacidad;
    }
  });

  let buttonesCapacidades = document.querySelectorAll(".btn-precio");
  buttonesCapacidades.forEach((buttonCapacidad) => {
    buttonCapacidad.addEventListener("click", () => {
      quitarClase(buttonesCapacidades, "btn-seleccionado");
      buttonCapacidad.classList.add("btn-seleccionado");
      let capacidadSelecc = buttonCapacidad.value;
      resumenCompra1.capacidad = capacidadSelecc;
      resumenCompra1.cantCuotas = '';  
      let precio = iPhoneCapacidades.find(
        (iphone) =>
          iphone.capacidad == capacidadSelecc &&
          iphone.modelo == resumenCompra1.modelo
      );
      let precioSelecc = precio.precio;
      resumenCompra1.precio = precioSelecc;
      mostrarCuotas(cantCuotas, precioSelecc);
    });
  });
}
mostrarPrecios(modeloInicial); //Le paso un modelo a la función para que inicialmente muestre capacidades-precios por default.

//Crear botones para el pago según capacidad seleccionada

function mostrarCuotas(cantCuotas, precio) {
  const contenedorCuotas = document.getElementById("cuota");
  contenedorCuotas.innerHTML = "";
  cantCuotas.forEach((element) => {
    const bttn = document.createElement("button");
    bttn.classList.add("btn", "btn-text", "btn-cuota");
    bttn.innerHTML = `<h2 class="textButton">${element.cuota} ${
      element.cuota == 1 ? "cuota" : "cuotas"
    }</h2>
                        <h2 class="textButtonSub" >${
                          element.interes
                        }% de interés</h2>
                        <h2 class="textButtonSub" >$${Number(
                          precio * (1 + element.interes / 100)
                        ).toLocaleString("en", options)}</h2>`;
    contenedorCuotas.appendChild(bttn);
    bttn.value = element.cuota;
  });

  let buttonesCuota = document.querySelectorAll(".btn-cuota");
  buttonesCuota.forEach((buttonCuota) => {
    buttonCuota.addEventListener("click", () => {
      quitarClase(buttonesCuota, "btn-seleccionado");
      buttonCuota.classList.add("btn-seleccionado");
      let cuotaSelecc = parseInt(buttonCuota.value);
      resumenCompra1.cantCuotas = cuotaSelecc;
      let cuota = cantCuotas.find((cuota) => cuota.cuota == cuotaSelecc);
      let cuotasSelecc = cuota.interes;
      resumenCompra1.interes = cuotasSelecc;
      comprar();
    });
  });
}
mostrarCuotas(cantCuotas, iPhoneCapacidades[0].precio); 

function comprar() {
  const contenedorComprar = document.getElementById("comprar");
  contenedorComprar.innerHTML = "";
  const bttn = document.createElement("button");
  bttn.classList.add("btn", "btn-text", "btn-comprar");
  bttn.innerHTML = `Añadir a la bolsa`;
  contenedorComprar.appendChild(bttn);

  let buttonComprar = document.querySelector('.btn-comprar');
  buttonComprar.addEventListener('click', ()=>{
    let aux = 0;
    let iterar = Object.values(resumenCompra1);

    for(let i=0; i<iterar.length-1; i++){
      iterar[i] ||  aux++;    
    }

    if (aux == 0){
      guardarStorage();
      window.location.href = './bolsa.html';
      aux = 0;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar todas las características del iPhone',
      })
    }
  })
}

function guardarStorage(){
  localStorage.setItem(Date.now(), JSON.stringify(resumenCompra1));
}
