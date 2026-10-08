
const start = new Date("2026-09-20");
const end = new Date("2026-11-19");
const today = new Date();

let elapsed = Math.floor((today-start)/(1000*60*60*24));
let remaining = Math.floor((end-today)/(1000*60*60*24));

if(elapsed>=0){
document.getElementById("elapsed").innerHTML = elapsed+" Days";
}

if(remaining>=0){
document.getElementById("remaining").innerHTML = remaining+" Days";
}
