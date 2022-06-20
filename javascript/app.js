
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo11]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')

const listadoCarrito=document.querySelector('#contenedorCarro')


//Funciones
//---------------------------------------------------------------------------------------------------------


//Creo funcion para mostrar todos los articulos del array artVentas
const renderizarListProductos=()=>{
    
    artVentas.forEach((producto)=>{
       
        const artDiv = document.createElement('div')
        
        artDiv.className='card-body'
        artDiv.innerHTML=`<h4 class="card-title">${producto.nombre}</h4>
        <img src=${producto.imagen} alt="${producto.descripcion}">
            <p class="card-text">U$S ${producto.precio}</p>
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

            if(ExisteArtenCarro(artiSeleccionado)==true)
                {
                    
                }
                else
                {

                    carrito.push(artiSeleccionado)
                    imprimirCarro()
                   
                }
}

const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
    boton.addEventListener('click',renderizarArticulos)
    })
   


}

//creo funcion para eliminar articulos del carrito
const agregaBtnsEliminar =()=>{

    const eliminaBoton=document.querySelectorAll('.btn2')
    eliminaBoton.forEach((boton)=>{
    boton.addEventListener('click',EliminarDeCarrito)
    })
   


}


//creo una funcion para recuperar el carrito del local storage y poder mostrarlo
const recuperarCarrito=()=>{
    
    carrito = JSON.parse(localStorage.getItem('claveCarro'))
    imprimirCarro()

}

//funcion para mostrar el carrito

const imprimirCarro=()=>{

            
            listadoCarrito.innerHTML=""
            carrito.forEach((producto)=>{
            const artDiv = document.createElement('div')
          
            artDiv.className='card-body'
            artDiv.innerHTML=`<div class="imagenCarr"><img id="cardImagen" src=${producto.imagen} alt="The Beatles"></div>
             <div id="divcard">   
             <h4 id="tituloPrec" class="card-title">$ ${producto.precio}</h4>
            </div>
           
            <h5 id="tituloCard" class="card-title">${producto.descripcion}</h5>
            <input type="number" class="cuadroNumero">  
            <br>
            <h5 id="tituloCod" class="card-title">Codigo : ${producto.cod_articulo}</h5>
            
           
            
            <br>
            <input codigo="${producto.cod_articulo}" type="reset" value="X" class="btn2 btn-primary"> 
            </div> 
            
    </div>    
            `
    
            listadoCarrito.append(artDiv)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
        })
        agregaBtnsEliminar()
}

const ExisteArtenCarro=(artrecibido)=>{
    const variable = carrito.some((aux)=>aux.cod_articulo==artrecibido.cod_articulo)
    return variable
}

const EliminarDeCarrito=(e)=>{
    const idSeleccionado = e.target.getAttribute('codigo')
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)

    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice

    carrito.splice(indice,1)
    localStorage.setItem('claveCarro', JSON.stringify(carrito))       
   imprimirCarro()


}


//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListProductos()
if (localStorage.getItem('claveCarro') !== null) {
recuperarCarrito()
}