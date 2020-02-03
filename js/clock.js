const fecha = new Date();

let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let dia = dias[fecha.getDay()],
    tiempo = fecha.getHours() + ":" + fecha.getMinutes(),
    mes = meses[fecha.getMonth()],
    numero = fecha.getDate(),
    ano = fecha.getFullYear();    

function reloj() {
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("hora").innerHTML = tiempo;
    document.getElementById("mes").innerHTML = mes;
    document.getElementById("ano").innerHTML = ano;
    document.getElementById("fecha").innerHTML = numero;
} setInterval(reloj, 1000);

/* let crono = setInterval(reloj, 1000); */