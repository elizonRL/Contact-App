 /**
* @author Elizon Rodriguez <elizorodriguez16@gmail.com>
*/

 let contacto;

function guardarDatos(contactos){
    localStorage.setItem("contacto", JSON.stringify(contactos))
}

function optenerDatos(){
    contacto = JSON.parse(localStorage.getItem("contacto"));
    console.log(contacto);
    return contacto;
}  