function ingresoValidacion(){
    
    let email = document.getElementById("email").value;

    
    //  document.writeln(email);
    let contrasena = document.getElementById("password").value;
   

    let storageEmail=localStorage.getItem("email");

    let storagepassword=localStorage.getItem("password");

   
    if(email == storageEmail && contrasena == storagepassword ){
        alert("Usuario o contraseña correctos");
        window.open("./comics.html", "_blank");
        

        
        
    }else{
        alert("Usuario o contraseña incorrectos");
    } 
    //  

}

