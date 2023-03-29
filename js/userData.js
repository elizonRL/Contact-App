 /**
* @author Elizon Rodriguez <elizorodriguez16@gmail.com>
*/
 let contacto;
/** 
* Optine los Datos que ingrese los usuarios.
* @param {Object} contactos - Objeto con la informacion del contacto.
*/
function guardarDatos(contactos){
    localStorage.setItem("contacto", JSON.stringify(contactos))
}
/** 
* Optiene Los datos desde el LocalStorage.
* @param {} contacto 
* @return {contacto} retorna un cobjeto con la informacion de contacto.
*/
function optenerDatos(){
    contacto = JSON.parse(localStorage.getItem("contacto"));
    console.log(contacto);
    return contacto;
}  