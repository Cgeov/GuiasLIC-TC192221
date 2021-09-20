var prod = document.getElementById("producto");
var pre = document.getElementById("precio");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var tbody = document.getElementById("body");
var ttotal = document.getElementById("total");

var productos = [];

function actualizar_Tabla(){
    tbody.innerHTML="";
    productos.forEach(producto => {
        let produ = producto[0];
        let precio = producto[1];

        let cellPro = document.createElement("div");
        cellPro.className="cell";
        cellPro.innerHTML=produ;

        let cellPre = document.createElement("div");
        cellPre.className="cell";
        cellPre.innerHTML="$"+precio;

        let row = document.createElement("div");
        row.className="row";
        row.appendChild(cellPro);
        row.appendChild(cellPre);

        tbody.appendChild(row);
    });
}

function calcular_Total(){
    var suma = 0;
    productos.forEach(producto => {
        suma+=(producto[1]*1);
    });
    let cell1 = document.createElement("div");
    cell1.className="cell";
    cell1.innerHTML="<center>Total</center>";
    let cell2 = document.createElement("div");
    cell2.className="cell";
    cell2.innerHTML="$"+suma;
    ttotal.innerHTML="";
    ttotal.appendChild(cell1);
    ttotal.appendChild(cell2);
}

function isNumeric(text){
    var regex = /^\d+(\.\d{1,2})?$/;
    if(regex.test(text)){
        return true;
    } else {
        return false;
    }
}

btn1.addEventListener("click",function(){
    var newProd = [];
    pre.style.border="3px solid black";
    prod.style.border="3px solid black";
    var validador = true;
    if(prod.value.trim().length==0){
        prod.style.border="3px solid Tomato";
        alert("Producto ingresado no válido");
        validador = false;
    }
    if(!isNumeric(pre.value)){
        pre.style.border="3px solid Tomato";
        alert("Precio ingresado no válido");
        validador = false;
    }
    if(validador){
        newProd.push(prod.value.trim());
        newProd.push(pre.value);
        productos.push(newProd);
        actualizar_Tabla();
        prod.value="";
        pre.value="";
        ttotal.innerHTML="";
    }
    
},null);

btn2.addEventListener("click",calcular_Total,null);