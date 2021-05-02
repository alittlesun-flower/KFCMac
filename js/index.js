const pedidos = []; //definir arreglo
const cargartabla = ()=>{
    let tbody = document.querySelector("#tabla-pedidos");
    tbody.innerHTML = "";
    for(let i=0; i<pedidos.length; ++i){
        let p = pedidos[i];
        let tr = document.createElement("tr");
        let tdnom = document.createElement("td");
        let tdtotal = document.createElement("td");
        let tdtipo = document.createElement("td");

        tdnom.classList.add("text-center");
        tdnom.innerText = p.nombre;
        tdtotal.classList.add("text-center");
        tdtotal.innerText = ("$" + p.total);

        let tipo = document.createElement("i")
        if(p.pedido == "1"){
            tipo.classList.add("fas", "fa-box-open", "text-primary", "fa-3x")
        }else{
            tipo.classList.add("fas", "fa-hamburger", "text-warning", "fa-3x")
        }
        tdtipo.classList.add("text-center")
        tdtipo.appendChild(tipo);

        tr.appendChild(tdnom);
        tr.appendChild(tdtotal);
        tr.appendChild(tdtipo);
        tbody.appendChild(tr);
    }
};
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let pedido = document.querySelector("#pedido-select").value;
    let total = document.querySelector("#total-num").value;
    let pago = document.querySelector("#pago-efectivo").value;
    if (nombre===""){
        Swal.fire("Error", "No ingresó nombre", "warning")
    }else{
        let compra = {};
        compra.nombre = nombre;
        compra.pedido = pedido;
        compra.total = total;
        compra.pago = pago;
    
        pedidos.push(compra);
        cargartabla();
        Swal.fire("Resultado exitoso", "Pedido Registrado", "info")
    }

});