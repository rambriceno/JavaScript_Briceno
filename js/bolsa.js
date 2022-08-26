const iPhoneSelect = [
    { modelo: '11', color: "Verde", imagen: "../img/iphone11-green-select-2019_GEO_EMEA.jfif" },
    { modelo: '11', color: "Violeta", imagen: "../img/iphone11-purple-select-2019_GEO_EMEA.jfif" },
    { modelo: '11', color: "Blanco", imagen: "../img/iphone11-white-select-2019_GEO_EMEA.jfif" },
    { modelo: '11', color: "Amarillo", imagen: "../img/iphone11-yellow-select-2019_GEO_EMEA.jfif" },
    { modelo: '11', color: "Negro", imagen: "../img/iphone11-black-select-2019_GEO_EMEA.jfif" },
    { modelo: '11', color: "Rojo", imagen: "../img/iphone11-red-select-2019_GEO_EMEA.jfif" },
    { modelo: '12', color: "Verde", imagen: "../img/iphone-12-green-select-2020.jfif" },
    { modelo: '12', color: "Violeta", imagen: "../img/iphone-12-purple-select-2021.jfif" },
    { modelo: '12', color: "Azul", imagen: "../img/iphone-12-blue-select-2020.jfif" },
    { modelo: '12', color: "Blanco", imagen: "../img/iphone-12-white-select-2020.jfif" },
    { modelo: '12', color: "Negro", imagen: "../img/iphone-12-black-select-2020.jfif" },
    { modelo: '12', color: "Rojo", imagen: "../img/iphone-12-red-select-2020.jfif" },
    { modelo: '13', color: "Verde", imagen: "../img/iphone-13-green-select.jfif" },
    { modelo: '13', color: "Rosado", imagen: "../img/iphone-13-pink-select-2021.jfif" },
    { modelo: '13', color: "Azul", imagen: "../img/iphone-13-blue-select-2021.jfif" },
    { modelo: '13', color: "Medianoche", imagen: "../img/iphone-13-midnight-select-2021.jfif" },
    { modelo: '13', color: "Blanco Estrella", imagen: "../img/iphone-13-starlight-select-2021.jfif" },
    { modelo: '13', color: "Rojo", imagen: "../img/iphone-13-product-red-select-2021.jfif" },
    { modelo: '13 Pro', color: "Verde Alpino", imagen: "../img/iphone-13-pro-green-select.jfif" },
    { modelo: '13 Pro', color: "Plata", imagen: "../img/iphone-13-pro-silver-select.jfif" },
    { modelo: '13 Pro', color: "Oro", imagen: "../img/iphone-13-pro-gold-select.jfif" },
    { modelo: '13 Pro', color: "Grafito", imagen: "../img/iphone-13-pro-graphite-select.jfif" },
    { modelo: '13 Pro', color: "Azul Alpino", imagen: "../img/iphone-13-pro-blue-select.jfif" },
    { modelo: '13 Pro Max', color: "Verde Alpino", imagen: "../img/iphone-13-pro-max-green-select.jfif" },
    { modelo: '13 Pro Max', color: "Plata", imagen: "../img/iphone-13-pro-max-silver-select.jfif" },
    { modelo: '13 Pro Max', color: "Oro", imagen: "../img/iphone-13-pro-max-gold-select.jfif" },
    { modelo: '13 Pro Max', color: "Grafito", imagen: "../img/iphone-13-pro-max-graphite-select.jfif" },
    { modelo: '13 Pro Max', color: "Azul Alpino", imagen: "../img/iphone-13-pro-max-blue-select.jfif" }
];

//Acceso y extracción de datos del local storage
let resumenCompra = [];

for (let i = 0; i < localStorage.length; i++) {
  if(localStorage.key(i) != "validMail" && localStorage.key(i) != "modelo"){
    let clave = localStorage.key(i);
    let valor = JSON.parse(localStorage.getItem(clave));
    resumenCompra.push(valor);
  }
} 

//El formato que le quiero dar el precio con la función Number.
const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
};

//Funciones para precio final y valor de cuota
const valorFinal = (precio,interes) => precio*(1+(interes/100));
const valorCuota = (precio,interes,cantCuota) => ( precio*(1+(interes/100)))/cantCuota;

resumenCompra.forEach((element) => {
  element.valorFinal = parseFloat(valorFinal(element.precio, element.interes));
  element.valorCuota = parseFloat(valorCuota(element.precio, element.interes, element.cantCuotas));
});

//Creación de bolsa con productos

function crearBolsa(){
  let containerResumenCompra = document.getElementById("resumenCompra");
  containerResumenCompra.innerHTML = '';
  let SecDetalleCompra = document.getElementById('detalleCompra');
  SecDetalleCompra.innerHTML = ''; 
  let totalCompra = 0;
  let totalCuota = 0;
  for(let i =0; i<resumenCompra.length; i++){
    totalCompra = totalCompra + resumenCompra[i].valorFinal; 
    totalCuota = totalCuota + resumenCompra[i].valorCuota;
  }

  containerResumenCompra.innerHTML = `<h2 class="tituloModelo">El total de tu bolsa es $${Number(totalCompra).toLocaleString("en", options)}</h2>
                                      <h3 class="etiquetaPrecio">
                                        Compra online con envío rápido, gratuito y sin contacto.
                                      </h3>
                                      ${totalCompra == 0 ?  "" : "<button class='btn btn-text btn-pagar'>Pagar</button>"} 
  `
  let buttonPagar = document.querySelector('.btn-pagar');
  buttonPagar.addEventListener('click', ()=>{
    window.location.href = './pago.html';
  })

  for(let i =0; i<resumenCompra.length; i++){
    let fotoSelect = iPhoneSelect.find((iphone) => iphone.modelo == resumenCompra[i].modelo && iphone.color == resumenCompra[i].color);
    const div = document.createElement('div');
    div.classList.add('detalleCompra')
    div.innerHTML = `<div> <img src="${fotoSelect.imagen}" class="fotoCompra" alt=""> </div>
    <div class="detalleItem"> <h2 class="textoCompra"> iPhone ${resumenCompra[i].modelo} de ${resumenCompra[i].capacidad} en ${resumenCompra[i].color}</h2> </div>
    <div class="detallePrecio"> <h2 class="textoCompra"> $${Number(resumenCompra[i].valorFinal).toLocaleString("en", options)}</h2>
    <button id= "btn-eliminar" class="btn-eliminar" value="${localStorage.key(i)}"> Eliminar </button></div>`
    SecDetalleCompra.appendChild(div);
  }

  let btnEliminar = document.querySelectorAll('#btn-eliminar');
  btnEliminar.forEach((bttn)=>{
    bttn.addEventListener("click", ()=>{
      Swal.fire({
        title: 'Eliminar producto',  
        text: '¿Estás seguro que deseas eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem(bttn.value)
          location. reload();
          Swal.fire('Eliminado!', 'El producto se ha eliminado', 'success')
        } else if (result.isDenied) {
        }
      })
      
    })
  })
}
crearBolsa();

