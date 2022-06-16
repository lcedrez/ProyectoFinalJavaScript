
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')
const titulo1=document.querySelector('#titulo1')
const titulo2=document.querySelector('#titulo2')
const titulo3=document.querySelector('#titulo3')
const cardImagen=document.querySelector("#cardImagen")

const listadoCarrito=document.querySelector('#contenedorCarro')

//Funciones
//---------------------------------------------------------------------------------------------------------

const renderizarListProductos=()=>{
    artVentas.forEach((producto)=>{
        const artDiv = document.createElement('div')
        
        artDiv.className='card-body'
        artDiv.innerHTML=`<h4 class="card-title">${producto.descripcion}</h4>
        <img src=${producto.imagen} alt="${producto.descripcion}">
            <p class="card-text">$${producto.precio}</p>
            <p class="card-text"></p>
        <button codigo="${producto.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
        
        
      </div>
        `

        listadoProductos.append(artDiv)
    })

        agregarListennersBtns()


}

const renderizarArticulos= (e) => {
 const idSeleccionado = e.target.getAttribute('codigo')
const artiSeleccionado  =artVentas.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)

carrito.push(artiSeleccionado)
imprimirCarro()
}

const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
        boton.addEventListener('click',renderizarArticulos)
    })
   


}

const imprimirCarro=()=>{
            listadoCarrito.innerHTML=""
            carrito.forEach((producto)=>{
            const artDiv = document.createElement('div')
          
            artDiv.className='card-body'
            artDiv.innerHTML=`<img id="cardImagen" src=${producto.imagen} alt="The Beatles">
            <br>
            <br>
            <br>
            <br>
            <br>
            <h3 id="tituloCard" class="card-title">${producto.descripcion}</h5>
                <h4 id="tituloCard" class="card-title">$ ${producto.precio}</h4>
                    <h5 id="tituloCard" class="card-title">Codigo : ${producto.cod_articulo}</h5>
    </div>    
            `
    
            listadoCarrito.append(artDiv)
        })
}





//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListProductos()
