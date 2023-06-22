function obtenerHoraActual() {
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
  

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    return `${horas}:${minutos}:${segundos}`;
  }
  

  function actualizarReloj() {
    const relojElement = document.getElementById("reloj");
    relojElement.textContent = obtenerHoraActual();
  
    setTimeout(actualizarReloj, 1000);
  }
  
 
  actualizarReloj();
  