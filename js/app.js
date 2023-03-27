/**
* JS Para Manejar los Eventos el formulario y losdatos motrados en pnatalla 
* @author Elizon Rodriguez <elizorodriguez16@gmail.com>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/
let nombre;
let form;
let error;
let email;
let telefono;
let contactos = []
let id =0;
let tr;
let edit;
/** 
* Funcion que crea un metodo que solo acepta numeros en el imput de numero de telefono.
* @param {event} event - el emvento enviado por el input del formulario.
* @return {false} si ingresas letras retorna falso.
*/
function soloNumero(event){
    if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
}
/** 
* Maneja el forulario para que el campo nombre y numero de telefono no esten vacios 
* @param {event} event - maneja el evento sunmit del formulario.
*/
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
    }else{
        agregarData();
        agregarTabla();
        nombre.value="";
        email.value="";
        telefono.value=""
        nombre.focus();
    }  
/** 
* Generador de ID'S Unicos 
* @return {substring} Brief description of the returning value here.
*/}

generarIdUnico1 = () => { 
    return Math.random().toString(30).substring(2);           
}
/** 
* Crea un objeto con los datos Del contacto agregado y lo agrega a un array.
* @param {string} contactos - Es un arreglo para guardar el objeto de JS.
* @return {Array} Devuelve un Array de Objetos.
*/ 
1
function agregarData(){
    var contacto ={
            "id": generarIdUnico1(),
            "nombre": nombre.value,
            "email": email.value,
            "telefono": telefono.value
        }
    contactos.push(contacto);   
} 
/** 
* Elimina un Elemento ciando se preciona el boton Delet de la tabla de comtactos.
* @param {event} event- Maneja el evento click del elemento a creado en la funcion agregarTabla y elimina esa table row.
*/

function deletInfo(event){
    event.preventDefault();
    console.log(event.target.classList);
    if(event.target.classList.contains("fa-trash-can")){
        const deletId = event.target.getAttribute("data-id");
        contactos= contactos.filter(contacto => contacto.id !== deletId);
        console.log(deletId);
        agregarTabla();
    }
}
/** 
* Crea La tabla HTML de forma Dinamica al momento de guardar el el contacto.
* @param {Array} contactos - Trae todo los contacos guardados sobre el Array.
*/

function agregarTabla(){
    tr.innerHTML =" ";
    for(contactoitem of contactos){
        tr.innerHTML +=`
            <tr>
            <td>${contactoitem.id}</td>
            <td>${contactoitem.nombre}</td>
            <td>${contactoitem.email}</td>
            <td>${contactoitem.telefono}</td>
            <td><a href="" class="edit">
            <i class="fa-solid fa-pen-to-square" data-id="${contactoitem.id}"></i>
            </a></td>
            <td><a href="" class="delet">
            <i class="fa-solid fa-trash-can" data-id="${contactoitem.id}"></i>
            </a></td>
            </tr>
        `;
        
    }
    edit = document.getElementById("edit");
    tr.addEventListener("click", deletInfo);
}

/** 
* Verifica si el Dom Esta cargado y crea todo .
*/
function domCagado(){
    nombre = document.getElementById("name");
    form = document.getElementById("form");
    error = document.getElementById("error");
    email = document.getElementById("email");
    tr = document.getElementById("tr");

    
    telefono = document.getElementById("telefono");
    form.addEventListener("submit", comprobarFrom);
    
}
/** 
* Escucha el evento DOMContentLoaded para verificar que todo esta cargado
*/
document.addEventListener("DOMContentLoaded", domCagado)