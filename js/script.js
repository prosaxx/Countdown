import Countdown from "./countdown.js";

const tempoParaAno = new Countdown(" 01 January 2022 00:00:00 GMT-0400");
//console.log(tempoParaAno.total);
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaAno.total[index];
});
}
mostrarTempo();
setInterval(mostrarTempo, 1000);