const APIKEY = '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';
const URL = 'https://api.sendgrid.com/v3/mail/send';

function direccionEnvio () {
    let divEnvio = document.getElementById('contenedorDatos');
    divEnvio.innerHTML='';
    divEnvio.innerHTML=`<h2 class="tituloModelo">¿Dónde te enviamos el pedido?</h2>`

    const datosCliente = document.createElement('div');
    datosCliente.classList.add ('tituloModelo');
    datosCliente.innerHTML = `<h2 class="textoSubtitulo">Introduce tu nombre y dirección:</h2>
    <form>   
        <select class="form-select form-lista mb-3" aria-label="Default select example">
            <option selected>Título</option>
            <option value="1">Sr.</option>
            <option value="2">Sra.</option>
            <option value="3">Srta.</option>
            <option value="4">Sin esecificar</option>
        </select>
        <div class="mb-3">
            <input type="text" class="form-control form-detalles requerido"placeholder="Nombre(s)">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control form-detalles requerido" placeholder="Apellidos">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control form-detalles requerido" placeholder="Nombre o número del edificio/calle">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control form-detalles" id="" placeholder="Piso, escalera, cód. acceso (opc)">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control form-detalles" id="" placeholder="Información adicional sobre la dirección (opc)">
        </div>
        <div class="mb-3 cpCiudad">
            <input type="text" maxlength="5" minlength="4" class="form-control form-detalles requerido numeros" placeholder="Código Postal" >
            <input type="text" class="form-control form-detalles requerido"  placeholder="Ciudad">
        </div>
    </form> `
    divEnvio.appendChild(datosCliente);

    const datosContacto = document.createElement('div');
    datosContacto.classList.add ('tituloModelo');
    datosContacto.innerHTML = `<h2 class="textoSubtitulo">¿Cuáles son tus datos de contacto?</h2>
    <div class="mb-3">
            <input type="text" class="form-control form-detalles mail requerido" placeholder="Correo Electrónico">
        </div>
        <div class="mb-3">
            <input type="text" maxlength="10" minlength="8" class="form-control form-detalles requerido numeros" placeholder="Número de teléfono móvil">
        </div>
    `
    divEnvio.appendChild(datosContacto);

    const datosTarjeta = document.createElement('div');
    datosTarjeta.classList.add ('tituloModelo');
    datosTarjeta.innerHTML = `<h2 class="textoSubtitulo">Ingrese los datos de pago:</h2>
    <div class="mb-3">
            <input type="text" maxlength="16" minlength="16" class="form-control form-detalles requerido numeros"  placeholder="N.* tarjeta de crédito/débito">
        </div>
        <div class="mb-3 cpCiudad">
            <input type="text" maxlength="2" minlength="2" class="form-control form-detalles requerido numeros" placeholder="MM">
            <input type="text" maxlength="2" minlength="2" class="form-control form-detalles requerido numeros" placeholder="YY">
            <input type="text" maxlength="3" minlength="3" class="form-control form-detalles cvv requerido numeros" placeholder="CVV">
        </div>
    `
    divEnvio.appendChild(datosTarjeta);

    const procesarPago = document.createElement('div');
    procesarPago.classList.add ('contenedorProcesar');
    procesarPago.innerHTML = `<button class="btn btn-procesar">Procesar pago</button>`
    divEnvio.appendChild(procesarPago);

    const bttnPagar = document.querySelector('.btn-procesar')
    bttnPagar.addEventListener('click',()=>{
        camposVacios(); 
    })

    revisar();  
}
direccionEnvio ();

//Revisión de campos
//Colorea de rojo los campos vacíos
function revisar(){ 
    const revision = document.querySelectorAll('.requerido');
    revision.forEach((element)=> {
        element.addEventListener("blur",()=>{
            element.classList.remove('obligatorio');
            element.value=='' && element.classList.add('obligatorio');
        })
    });

    revisarNumeros();
    revisarMail();
}

//Función para verificar si el campo es un número
function isNum(val){
    return !isNaN(val);
}

//Verifica los campos con números
function revisarNumeros(){
    const numeros = document.querySelectorAll('.numeros');
    numeros.forEach((element)=>{
        element.addEventListener("blur", ()=>{
            let comprobar = isNum(element.value);
            if(comprobar == false){
                AlertNumeroInvalido();
                element.classList.add('obligatorio');
            }  

             if(element.value.length < element.minLength || element.value.length > element.maxLength ){
                element.classList.add('obligatorio');
            } 
        })
    })
}

//Verifica que el mail introducido sea válido - Se implemente el uso de API 
function revisarMail(){
    const checkMail = document.querySelector('.mail');
    checkMail.addEventListener("blur", ()=>{
        fetch(`https://api.eva.pingutil.com/email?email=${checkMail.value}`, {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result => {
                if(result.data.deliverable == false){
                    AlertMailInvalido();
                    checkMail.classList.add('obligatorio');
                }else{
                    checkMail.classList.remove('obligatorio'); 
                }
                localStorage.setItem('validMail', result.data.deliverable);})
            .catch(error => console.log('error', error));
    })
}

//Verifica que no hayan campos obligatorios vacíos para activar el botón de procesar pago
function camposVacios(){
    const revision = document.querySelectorAll('.requerido');
    let aux = 0;
    for (let i=0; i<revision.length; i++){
        if (revision[i].value == ''){
            aux++;
            revision[i].classList.add('obligatorio');
        }else{
            revision[i].classList.remove('obligatorio'); 
        }
    }

    let validacionMail = JSON.parse(localStorage.getItem('validMail'));
    if(validacionMail == false){
        aux++;
        let traerMail = document.querySelector('.mail');
        traerMail.classList.add('obligatorio');
    }

    aux == 0? alertPositivo():alertNegativo(); 
} 

//Funciones para Alerts
function alertPositivo(){
    Swal.fire({
        icon: 'success',
        title: '¡Gracias!',
        text: 'Tu compra ha sido procesada',
      }).then((result) =>{
        localStorage.clear();
        let tiempo = 1500;
        setTimeout(()=>{
            window.location.href = '../index.html';
        },tiempo);
      })
}

function alertNegativo(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar todos los campos obligatorios!',
      })
}

function AlertMailInvalido(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Introduce un mail válido',
      })
}

function AlertNumeroInvalido(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dato incorrecto, debes ingresar sólo números',
      })
}
