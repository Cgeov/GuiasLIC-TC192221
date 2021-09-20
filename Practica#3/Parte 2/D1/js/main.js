var btn = document.getElementById("btn1");
var num = document.getElementById("num");
var resp = document.getElementById("resp");

function isNumeric(text){
    var regex = /^[0-9]+$/;
    if(!regex.test(text)){
        return true;
    }else{
        return false;
    }
}
function isPar(num){
    if(num%2==0){
        return true;
    } else {
        return false;
    }
}

btn.addEventListener("click",function(){
    resp.className="";
    resp.innerHTML="";
    num.style.border="3px solid black";
    if(isNumeric(num.value)){
        resp.className="resp alert";
        resp.innerHTML="Ingrese solo datos numéricos enteros positivos";
        num.style.border="3px solid Red";
    }else{
        var numero = num.value;
        var cImpar=0;
        var cPar=0;
        var sImpar=0;
        var sPar=0;
        var cMayor=0;
        var cMenor=0;
        var sTodas=0;

        cMayor=numero[0];
        cMenor=numero[0];
        for(var i = 0;i<numero.length;i++){
            if(isPar(numero[i])){
                cPar++;
                sPar=(sPar)*1+(numero[i])*1;
            } else {
                cImpar++;
                sImpar=(sImpar)*1+(numero[i])*1;
            }
            if(cMayor<numero[i]){
                cMayor=numero[i];
            }
            if(cMenor>numero[i]){
                cMenor=numero[i];
            }
            sTodas=(sTodas)*1+(numero[i])*1;
        }
        resp.className="resp";
        resp.innerHTML="Cantidad de cifras: "+numero.length+"<br>Cantidad de cifras Impares: "+cImpar+"<br>Cantidad de cifras Pares: "+cPar+"<br>Suma de cifras Impares: "+sImpar+"<br>Suma de cifras Pares: "+sPar+"<br>Suma de todas las cifras: "+sTodas+"<br>Cifra mayor: "+cMayor+"<br>Cifra menor: "+cMenor;
    }
},null)