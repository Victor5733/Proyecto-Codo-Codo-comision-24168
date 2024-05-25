const userNameField=document.querySelector("#nombre");
const userLastNameField=document.querySelector("#apellido");
const userEmailField=document.querySelector("#email");
const userPasswordField=document.querySelector("#password");

const validateEmtyField = (message, e)=>{

    if(e.target.value.trim().length==0){
        e.target.classList.add("error");
        e.target.nextElementSibling.classList.add("active");
        e.target.nextElementSibling.innerHTML=message;
    }else{
        e.target.classList.remove("error");
        e.target.nextElementSibling.classList.remove("active");
        e.target.nextElementSibling.innerHTML="";
    }
}

userNameField.addEventListener("blur", (e)=>{
    validateEmtyField("Ingrese su nombre", e);
});

userLastNameField.addEventListener("blur", (e)=>{
    validateEmtyField("Ingrese su apellido", e);
});

userEmailField.addEventListener("blur", (e)=>{
    validateEmtyField("Ingrese su correo", e);
});

userPasswordField.addEventListener("blur", (e)=>{
    validateEmtyField("Ingrese su contraseña", e);
});








function registroUsuario(){
    
    let nombre=document.getElementById("nombre").value;
    // document.write(nombre)
    localStorage.setItem("nombre",nombre);

    let apellido=document.getElementById("apellido").value;
    localStorage.setItem("apellido",apellido);
    // document.write(apellido)

    let correo=document.getElementById("email").value;
    localStorage.setItem("email",correo);
    // document.write(correo)
    let contrasena=document.getElementById("password").value;
    localStorage.setItem("password",contrasena);
    // document.write(contrasena)
    
      

   

    
}