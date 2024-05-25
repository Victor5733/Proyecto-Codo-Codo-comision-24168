let inicio=``

for(let elemento of datos){
    inicio +=`
    
    <div class="card">
                <img src=${elemento.imagen} alt="heroe" >
                <div class="textoCard">
                    <h2>${elemento.nombre}</h2>
                    <p>${elemento.descripcion}</p>
                </div>
                <div  class="btn-favorito">
                    <button onclick= "guardarLocalStorage('${elemento.nombre}')" >Agregar a Heroe Preferido</button>
                </div>
    </div>`
} 

document.querySelector('.inicio').innerHTML=inicio 

function guardarLocalStorage(heroe){

    
    localStorage.setItem('heroesFavoritos', heroe)
    
}

function mostrarHeroeFavorito(){

       alert(localStorage.getItem('heroesFavoritos'))
    
}

