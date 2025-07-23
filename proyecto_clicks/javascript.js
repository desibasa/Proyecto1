let resultado = document.getElementById("resultado");
let valor = 0;
let body = document.getElementsByTagName("body")[0];
let red 
let green 
let blue 
let color

function random_color(){
    red= Math.floor(Math.random()*256);
    green= Math.floor(Math.random()*256);
    blue= Math.floor(Math.random()*256);
    color = "rgb(" + red + "," + green + "," + blue + ")";
    body.style.backgroundColor = color;
    red++
    green++
    blue++
};

function suma(){
    valor ++;
    resultado.textContent = valor;
    random_color();
};

function resta(){
    valor --;
    resultado.textContent = valor;
    random_color();
};
