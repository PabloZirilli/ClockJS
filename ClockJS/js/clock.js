let clock = setInterval(function() {
    let  fecha = new Date();
    
    let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
        meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    let dia = dias[fecha.getDay()],
        numero = fecha.getDate(),
        mes = meses[fecha.getMonth()],
        ano = fecha.getFullYear();    
    
    
    let horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    min = checkTime(minutos);
    sec = checkTime(segundos);
    
    let reloj = `${horas}:${min}:${sec}`;

    document.getElementById("hora").innerHTML = reloj;
    
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("fecha").innerHTML = numero;
    document.getElementById("mes").innerHTML = mes;
    document.getElementById("ano").innerHTML = ano;

}, 1000);

function checkTime(i){
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}
