var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var resp = document.getElementById("alert");
btn1.addEventListener("click",function(){
    var metros = window.prompt("Convertidor de Metros a Pies, ingrese los metros",0);
    if(isNumeric(metros)){
        resp.className="success";
        resp.innerHTML="Pies: "+(metros*3.281).toFixed(2);
    } else {
        resp.className="alert";
        resp.innerHTML="Ingrese solo datos numéricos o positivos";
    }
},null);

btn2.addEventListener("click",function(){
    var metros = window.prompt("Convertidor de Metros a Pulgadas, ingrese los metros",0);
    if(isNumeric(metros)){
        resp.className="success";
        resp.innerHTML="Pulgadas: "+(metros*39.37).toFixed(2);
    } else {
        resp.className="alert";
        resp.innerHTML="Ingrese solo datos numéricos o positivos";
    }
},null);

btn3.addEventListener("click",function(){
    var metros = window.prompt("Convertidor de Metros a Yardas, ingrese los metros",0);
    if(isNumeric(metros)){
        resp.className="success";
        resp.innerHTML="Yardas: "+(metros*1.094).toFixed(2);
    } else {
        resp.className="alert";
        resp.innerHTML="Ingrese solo datos numéricos o positivos";
    }
},null);

function isNumeric(text){
    var regex = /^\d+(\.\d{1,2})?$/;
    if(regex.test(text)){
        return true;
    } else {
        return false;
    }
}