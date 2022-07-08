let result = confirm('Bienvenido a TuTicket.com \n¿Desea comprar una entrada?');
let intento = 1;
let fecha;
let asiento;
let resumen;

if (result) {
    concierto = parseInt(prompt('Indique el concierto al cual desea asistir: \n1- ColdPlay \n2- Daddy Yankee \n3- Harry Style'));
}else {
    alert('Gracias por visitar TuTicket.com')
}

while (concierto != 1 && concierto != 2 && concierto != 3){
    if(intento == 3){
        result = confirm('Opciones inválidas. \nDesea continuar?');
        if(result){
            intento = 1;
            concierto = parseInt(prompt('Indique el concierto al cual desea asistir: \n1- ColdPlay \n2- Daddy Yankee \n3- Harry Style'));
            continue;
        }else{
            alert('Gracias por visitar TuTicket.com');
            break;
        }
    }
    alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
    concierto = parseInt(prompt('1- ColdPlay \n2- Daddy Yankee \n3- Harry Style'));
    intento = intento + 1;  
}

switch (concierto) {
    case 1:
        intento = 1;
        concierto = 'ColdPlay';
        fecha = parseInt(prompt('Usted seleccionó ColdPlay. \nPor favor, elija la fecha de concierto: \n1- 15/07/22 \n2- 16/07/22 \n3- 17/07/22'));
        while(fecha != 1 && fecha != 2 && fecha != 3){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                    if(result){
                        intento = 1;
                        fecha = parseInt(prompt('Usted seleccionó ColdPlay. \nPor favor, elija la fecha de concierto: \n1- 15/07/22 \n2- 16/07/22 \n3- 17/07/22'));
                        continue;
                    }else{
                        alert('Gracias por visitar TuTicket.com');
                        break;
                    }
            }   
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            fecha = parseInt(prompt('1- 15/07/22 \n2- 16/07/22 \n3- 17/07/22'));
            intento = intento + 1;
        }
        if(fecha == 1){
            fecha = '15/07/22';
        }else if(fecha == 2){
            fecha = '16/07/22';
        }else if(fecha == 3){
            fecha = '17/07/22';
        }else{
            break;
        }
        intento = 1;
        asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP \n2- Platea \n3- General'));
        while(asiento != 1 && asiento != 2 && asiento != 3){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                    if(result){
                        intento = 1;
                        asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP \n2- Platea \n3- General'));
                        continue;
                    }else{
                        alert('Gracias por visitar TuTicket.com');
                        break;
                    }
            }
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            asiento = parseInt(prompt('1- VIP \n2- Platea \n3- General'));
            intento = intento + 1;
        }
        if(asiento == 1){
            asiento = 'VIP';
        }else if(asiento == 2){
            asiento = 'Platea';
        }else if(asiento == 3){
            asiento = 'General';
        }else{
            break;
        }
        resumen = 'Usted compró entradas para '+concierto+' el día '+fecha+' y estará ubicado/a en asiento '+asiento+'.'+'\nGracias por confiar en TuTicket.com';
        alert(resumen);
        break;
    case 2:
        intento = 1;
        concierto = 'Daddy Yankee';
        fecha = parseInt(prompt('Usted seleccionó Daddy Yankee. \nPor favor, elija la fecha de concierto: \n1- 12/08/2022 \n2- 13/08/22'));
        while(fecha != 1 && fecha != 2){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                    if(result){
                        intento = 1;
                        fecha = parseInt(prompt('Usted seleccionó Daddy Yankee. \nPor favor, elija la fecha de concierto: \n1- 12/08/2022 \n2- 13/08/22'));
                        continue;
                    }else{
                        alert('Gracias por visitar TuTicket.com');
                        break;
                    }
            }
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            fecha = parseInt(prompt('1- 12/08/22 \n2- 13/08/22'));
            intento = intento + 1;
        }
        if(fecha == 1){
            fecha = '12/08/22';
        }else if(fecha == 2){
            fecha = '12/08/22';
        }else{
            break;
        }
        intento = 1;
        asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP Meet&Greet \n2- VIP \n3- Platea \n4- General'));
        while(asiento != 1 && asiento != 2 && asiento != 3 && asiento != 4){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                if(result){
                    intento = 1;
                    asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP Meet&Greet \n2- VIP \n3- Platea \n4- General'));
                    continue;
                }else{
                    alert('Gracias por visitar TuTicket.com');
                    break;
                }
            }
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            asiento = parseInt(prompt('1- VIP Meet&Greet \n2- VIP \n3- Platea \n4- General'));
            intento = intento + 1;
        }
        if(asiento == 1){
            asiento = 'VIP Meet&Greet';
        }else if(asiento == 2){
            asiento = 'VIP';
        }else if(asiento == 3){
            asiento = 'Platea';
        }else if(asiento == 4){
            asiento = 'General';
        }else{
            break;
        }
        resumen = 'Usted compró entradas para '+concierto+' el día '+fecha+' y estará ubicado/a en asiento '+asiento+'.'+'\nGracias por confiar en TuTicket.com';
        alert(resumen);
        break;
    case 3:
        intento = 1;
        concierto = 'Harry Style';
        fecha = parseInt(prompt('Usted seleccionó Harry Style. \nPor favor, elija la fecha de concierto: \n1- 07/10/22 \n2- 08/10/22 \n3- 09/10/22'));
        while(fecha != 1 && fecha != 2 && fecha != 3){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                if(result){
                    intento = 1;
                    fecha = parseInt(prompt('Usted seleccionó Harry Style. \nPor favor, elija la fecha de concierto: \n1- 07/10/22 \n2- 08/10/22 \n3- 09/10/22'));
                    continue;
                }else{
                    alert('Gracias por visitar TuTicket.com');
                    break;
                }
            }
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            fecha = parseInt(prompt('1- 07/10/22 \n2- 08/10/22 \n3- 09/10/22'));
            intento = intento + 1;
        }
        if(fecha == 1){
            fecha = '07/10/22';
        }else if(fecha == 2){
            fecha = '08/10/22';
        }else if(fecha == 3){
            fecha = '09/10/22';
        }else{
            break;
        }
        intento = 1;
        asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP \n2- Platea \n3- Campo'));
        while(asiento != 1 && asiento != 2 && asiento != 3){
            if(intento == 3){
                result = confirm('Opciones inválidas. \nDesea continuar?');
                if(result){
                    intento = 1;
                    asiento = parseInt(prompt('Por favor, elija su tipo de asiento: \n1- VIP \n2- Platea \n3- Campo'));
                    continue;
                }else{
                    alert('Gracias por visitar TuTicket.com');
                    break;
                }
            }
            alert('Debe introducir una opción válida.'+'\nIntento '+(intento)+'/3')
            asiento = parseInt(prompt('1- VIP \n2- Platea \n3- Campo'));
            intento = intento + 1;
        }
        if(asiento == 1){
            asiento = 'VIP';
        }else if(asiento == 2){
            asiento = 'Platea';
        }else if(asiento == 3){
            asiento = 'Campo';
        }else{
            break;
        }
        resumen = 'Usted compró entradas para '+concierto+' el día '+fecha+' y estará ubicado/a en asiento '+asiento+'.'+'\nGracias por confiar en TuTicket.com';
        alert(resumen);
        break;
    default:
        break;
}