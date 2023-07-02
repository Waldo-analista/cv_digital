//funciones que verifican vacio de nombre y largo de nombre
function verificar_vacio_nombre(){
let contenido=String(document.querySelector("#nombre").value);
if (contenido.length==0){return 1}
else{
    return 0;
}
}

function verificar_largo_mayor50_nombre(){
    let contenido=String(document.querySelector("#nombre").value);
    if (contenido.length>50){return 1}
    else{
        return 0;
    }

}

//funciones que verifican vacio de email y composicion

function verificar_vacio_email(){
    let contenido=String(document.querySelector("#email").value);
    if (contenido.length==0){return 1}
    else{
        return 0;
    } 
}

function verificar_composicion_email_erronea(){
    if (verificar_vacio_email()==false){
    let contenido=String(document.querySelector("#email").value);
    if (contenido.match(/[a-zA-Z0-9._\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}/)){return 0}
    else{
        return 1;
    }   
 }
}

//funciones para verificar si asunto esta vacio o tiene más de 50 caracteres
function verificar_vacio_asunto(){
    let contenido=String(document.querySelector("#asunto").value);
    if (contenido.length==0){return 1}
    else{
        return 0;
    }
    }
    
    function verificar_largo_mayor50_asunto(){
        let contenido=String(document.querySelector("#asunto").value);
        if (contenido.length>50){return 1}
        else{
            return 0;
        }
    
    }

//funciones para verificar si mensaje esta vacio o si tiene más de 300 caracteres
function verificar_vacio_mensaje(){
    let contenido=String(document.querySelector("#mensaje").value);
    if (contenido.length==0){return 1}
    else{
        return 0;
    }
    }
    
    function verificar_largo_mayor300_mensaje(){
        let contenido=String(document.querySelector("#mensaje").value);
        if (contenido.length>300){return 1}
        else{
            return 0;
        }
    
    }



function ejecucion(){
    if (verificar_vacio_nombre()|| verificar_largo_mayor50_nombre()){
        if (verificar_vacio_nombre()){swal("Error", "El campo Nombre está vacío", "error");}
        if(verificar_largo_mayor50_nombre()){swal("Error","El campo Nombre posee más de 50 carácteres. El límite es de 50.","error");}
    }
    else if (verificar_vacio_email()||verificar_composicion_email_erronea()){
        if(verificar_vacio_email()){swal("Error","El campo Email está vacío","error");}
        if(verificar_composicion_email_erronea()){swal("Error","El campo Email no tiene la estructura de email: texto@texto.texto","error")}

    }
    else if(verificar_vacio_asunto()||verificar_largo_mayor50_asunto()){
        if(verificar_vacio_asunto()){swal("Error","El campo Asunto está vacío","error")}
        if(verificar_largo_mayor50_asunto()){swal("Error","El campo Asunto posee más de 50 carácteres. El límite es de 50.","error")}

    }
    else if(verificar_vacio_mensaje()||verificar_largo_mayor300_mensaje()){
        if(verificar_vacio_mensaje()){swal("Error","El campo Mensaje está vacío","error");}
        if(verificar_largo_mayor300_mensaje()){swal("Error","El campo Mensaje posee más de 300 carácteres. El límite es de 300.","error");}

    }else{
        swal("¡ÉXITO!","El mensaje ha sido enviado a Waldo","success");

    }

}

const boton_contacto=document.getElementById("boton_contacto");
boton_contacto.addEventListener("click",ejecucion);
