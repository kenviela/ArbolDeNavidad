const buttonInicio = document.getElementById("inicio");
console.log(buttonInicio);
const cancion = document.getElementById("cancion");
console.log(cancion);
const stars = document.getElementsByClassName("star");
console.log(stars);

let arbolEncendido=true; 
function encenderArbol(e){
  if(arbolEncendido){
    return apagar()
  }
  return encender()
}
function apagar(){
  cancion.pause()
  for(let star of stars){
    star.classList.add("offStar")
  }
  arbolEncendido=false;
}
function encender(){
  cancion.play()
  for(let star of stars){
    star.classList.remove("offStar")
  }
  arbolEncendido=true;
}
//buttonInicio.onclick = encenderArbol
buttonInicio.addEventListener("click",encenderArbol)