"use strict";
let cartasxb = [0];
let choosen;
let cuentax = 0;
let GanadasTotales=0


function VoltearCarta (id) {
  let i = document.getElementById(id);
    let d = Math.floor(Math.random()*2+1);
    if (d === 1) {
      i.src="img/x.jpeg";
      cartasxb.push("img/x.jpeg");
      cuentax++
    }
    else {
    i.src = "img/blanco.jpeg";
    cartasxb.push("img/blanco.jpeg")
  }
  console.log(cartasxb)
}

function IniciarJuego(){
  document.getElementById('erroresactual').innerHTML=0;
  document.getElementById('aciertosActual').innerHTML=0;
  cartasxb.splice(1,cartasxb.length);
  tiempo ();
  VoltearCarta ("tomar1");
  VoltearCarta ("tomar2");
  VoltearCarta ("tomar3");
  VoltearCarta ("tomar4");
  VoltearCarta ("tomar5");
}

function tiempo() {
let t = document.getElementById('inputTiempo').value
let timer = window.setInterval("OcultarCartas()", t * 1000);
}
function OcultarCartas(){
  OcultarCarta ("tomar1");
  OcultarCarta ("tomar2");
  OcultarCarta ("tomar3");
  OcultarCarta ("tomar4");
  OcultarCarta ("tomar5");
}
function OcultarCarta (id){
  let i = document.getElementById(id);
  i.src = "img/dorso.jpeg";
}

function ElegirCartas() {
  let t = 0;
  let l = 0;
  var select = document.getElementsByClassName("select-card");
  choosen = select[0].value;
  let n = choosen
  console.log(n)
  let tomar='tomar'+n;
  document.getElementById(tomar).src = cartasxb[n];
  if ( cartasxb[n] === "img/x.jpeg") {
    cuentax--
    console.log(cuentax)
    let acierto= document.getElementById('aciertosActual');
    let aciertoT= document.getElementById('aTotales');
    l++
    let sumar =parseInt(acierto.innerHTML)+l;
    document.getElementById('aciertosActual').innerHTML= sumar;
    let sumarT = parseInt(aciertoT.innerHTML)+l;
    document.getElementById('aTotales').innerHTML = sumarT
    if (cuentax ===0){
    partidaGanada()
    }
  }
  else if (cartasxb[n] ===  "img/blanco.jpeg"){
    let error= document.getElementById('erroresactual');
    let errorT= document.getElementById('eTotales');
    t++
    let sumar =parseInt(error.innerHTML)+t;
    document.getElementById('erroresactual').innerHTML= sumar;
    let sumarT = parseInt(errorT.innerHTML)+t;
    document.getElementById('eTotales').innerHTML = sumarT
  }

function partidaGanada(){
 GanadasTotales = GanadasTotales+1;
    alert("Ganaste!" + "      " + "Partidas ganadas en total: " + GanadasTotales);
}

}
