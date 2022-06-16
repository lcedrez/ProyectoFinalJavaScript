
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo8]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')

const listadoCarrito=document.querySelector('#contenedorCarro')


//Funciones
//---------------------------------------------------------------------------------------------------------

const renderizarListProductos=()=>{
    
    artVentas.forEach((producto)=>{
        carrito = JSON.parse(localStorage.getItem('claveCarro'))
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

const agregaBtnsEliminar =()=>{

    const eliminaBoton=document.querySelectorAll('.btn2')
    eliminaBoton.forEach((boton)=>{
    boton.addEventListener('click',EliminarDeCarrito)
    })
   


}

const imprimirCarro=()=>{

            
            listadoCarrito.innerHTML=""
            carrito.forEach((producto)=>{
            const artDiv = document.createElement('div')
          
            artDiv.className='card-body'
            artDiv.innerHTML=`<img id="cardImagen" src=${producto.imagen} alt="The Beatles">
            <input codigo="${producto.cod_articulo}" type="reset" value="X" class="btn2 btn-primary"> 
            <h3 id="tituloCard" class="card-title">${producto.descripcion}</h5>
            <h4 id="tituloCard" class="card-title">$ ${producto.precio}</h4>
            <h5 id="tituloCard" class="card-title">Codigo : ${producto.cod_articulo}</h5>
            <div class="cantidadCompra">
            <h5>Cantidad</h5>
            <input type="number" class="cuadroNumero"> 
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
   imprimirCarro()


}
/*
var arreglo = [1,2,3,4,5];

var indice = arreglo.indexOf(3); // obtenemos el indice
arreglo.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

console.log( arreglo );
*/

//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListProductos()
