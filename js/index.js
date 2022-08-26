const pagina = document.getElementsByClassName('modelo');

for (const element of pagina){
     element.addEventListener("click", () => {
        sessionStorage.setItem('modelo', element.value);
        window.location.href = element.href;
    }); 
}; 

