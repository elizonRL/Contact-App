let nombre;
let form;
let error;
let email;
let telefono;
let contactos = []
let id =0;
let tr;
let edit;

function soloNumero(event){
    if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
}
function comprobarFrom(event){
    event.preventDefault();
    if(nombre.value.length == 0){
        error.innerText = "Complete el campo Nombre";
        nombre.focus();
        return false;
    }else if(telefono.value.length == 0){
        error.innerText = "Complete el campo Numero";
        telefono.focus();
        return false;
    }else if(telefono.value.length<10){
        error.innerText = "El Numero es Muy Corto";
        telefono.focus();
        return false;
    }
    
    agregarData();
    agregarTabla();
    
}
generarIdUnico1 = () => { 
    return Math.random().toString(30).substring(2);           
} 
function agregarData(){
    while(id<contactos.length){
        
        id++
    }
    contacto ={
        "id": generarIdUnico1(),
        "nombre": nombre.value,
        "email": email.value,
        "telefono": telefono.value
    }
    contactos.push(contacto);    
}
function editInfo(e){
    
    //console.log(e.target.classList);
    if(e.target.classList.contains("delet")){
        const deletId = e.target.getAttribute("data-id");
        contactos= contactos.filter(contacto => contacto.id != deletId);
        console.log(contactos);
        agregarTabla();
    }
}
function agregarTabla(){
    tr.innerHTML =" ";
    for(contactoitem of contactos){
        tr.innerHTML +=`
            <tr>
            <td>${contactoitem.id}</td>
            <td>${contactoitem.nombre}</td>
            <td>${contactoitem.email}</td>
            <td>${contactoitem.telefono}</td>
            <td><input type="submit"  value="Edit" class="edit" ></td>
            <td><input type="submit"  value="Delet" class="delet" data-id="${contactoitem.id}"></td>
            </tr>
        `;
        
    }
    edit = document.getElementById("edit");
    tr.addEventListener("click", editInfo);
}


function domCagado(){
    nombre = document.getElementById("name");
    form = document.getElementById("form");
    error = document.getElementById("error");
    email = document.getElementById("email");
    tr = document.getElementById("tr");

    
    telefono = document.getElementById("telefono");
    form.addEventListener("submit", comprobarFrom);
    
}

document.addEventListener("DOMContentLoaded", domCagado)