var btn1 = document.getElementById("btn1");
var resp = document.getElementById("alert");
btn1.addEventListener("click",function(){
    var celcius = window.prompt("Convertidor de Celcius a Fahrenheit, ingrese los Celcius",0);
    if(isNumeric(celcius)){
        resp.className="success";
        resp.innerHTML="Fahrenheit: "+((celcius*(9/5))+32).toFixed(2)+" °F";
    } else {
        resp.className="alert";
        resp.innerHTML="Ingrese solo datos numéricos";
    }
},null);

function isNumeric(text){
    var regex = /^[-]?\d+(\.\d{1,2})?$/;
    if(regex.test(text)){
        return true;
    } else {
        return false;
    }
}