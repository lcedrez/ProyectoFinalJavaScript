
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')


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

const renderizarArticulos=(event)=>{
    console.log(event.target)


}

const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
        boton.addEventListener('click',renderizarArticulos)
    })
   


}

//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListProductos()
