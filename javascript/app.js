
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
let cantidad=1
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo11]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')

const listadoCarrito=document.querySelector('#contenedorCarro')
const cuotas=document.querySelector('.parrafoCuotas')
const subTotal=document.querySelector('#spanTotal')
const cantidades=document.querySelectorAll('#cantidad')



//Funciones
//---------------------------------------------------------------------------------------------------------


//Creo funcion para mostrar todos los articulos del array artVentas
const renderizarListProductos=()=>{
    
    artVentas.forEach((producto)=>{
       
        const artDiv = document.createElement('div')
        
        artDiv.className='card-body'
        artDiv.innerHTML=`<h4 class="card-title">${producto.nombre}</h4>
        <img src=${producto.imagen} alt="${producto.descripcion}">
            <p class="card-text">U$s ${producto.precio}</p>
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


        
        !ExisteArtenCarro(artiSeleccionado)&& carrito.push(artiSeleccionado) && ActualizarTotal(artiSeleccionado.precio,cantidad) &&localStorage.setItem('TotalFinal',totalFinal),localStorage.setItem('TotalFinal',totalFinal)
        imprimirCarro()

}





const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
    boton.addEventListener('click',renderizarArticulos)
    })
   


}

//creo funcion para eliminar articulos del carrito
const agregaBtnsEliminar =()=>{

    const eliminaBoton=document.querySelectorAll('.imgPapelera')
 
    eliminaBoton.forEach((boton)=>{
    boton.addEventListener('click',EliminarDeCarrito)
    })
   


}
//Este es boton de prueba mas menos
const agregaBtnsMas =()=>{

    const btnMas=document.querySelectorAll('.btn2')
 
    btnMas.forEach((boton)=>{
    boton.addEventListener('click',actualizoMas)
        
    })
   


}
//aca es donde toy haceindo pruebas mas
const actualizoMas=()=>{
    let numero = Number(mas.value.trim(" "));
    numero = !isNaN( numero ) ? numero + 1 : 1;
  
    mas.value = numero;
    console.log(numero)
}




const agregaBtnsCantidad =()=>{
    
    const btnCantidad=document.querySelectorAll('.btnCant')
 
    btnCantidad.forEach((boton)=>{
    boton.addEventListener('change',ActualizaTotalCarrito)
    
    })
   


}

const ActualizaTotalCarrito =(e)=>{
    
    const precioArt = e.target.getAttribute('precio')
    
    const cantidadSeleccionada = document.getElementById('cantidad').value
   
    ActualizarTotal(precioArt,cantidadSeleccionada)

    
}


//creo una funcion para recuperar el carrito del local storage y poder mostrarlo
const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    
    imprimirCarro()

}

const recuperarTotal=()=>{
    
    totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
}

//funcion para mostrar el carrito

const imprimirCarro=()=>{

            
            listadoCarrito.innerHTML=""
            carrito.forEach((producto)=>{
            const artDiv = document.createElement('div')
          
            artDiv.className='contenedorPadre'
            artDiv.innerHTML=` <div class="contenedorPadre">
            <div id="contenedorCarrito" class="contieneTodoElCarrito">
                
                    <div class="contTodoCarro">
                            <div class="conedorDeItems">
                                <div class="itemImagen"> <img src=${producto.imagen} alt="" class="imgCarrrito"></div>
                                <div class="itemsGral">
                                        <h2 class="item_name">
                                        <a href="">
                                        ${producto.descripcion} </a>
                                        </h2>
                                        <div class="itemDescripcion">
                                            <ul class="itemListado">
                                                <li>
                                                Codigo : <em>${producto.cod_articulo}</em>
                                                </li>
                                                <li>
                                                Categoria : <em>${producto.categoria}</em>
                                                </li>
                                                <li>
                                                Color :
                                                <em>${producto.color}</em>
                                                </li>
                                                </ul>
                                        </div>
                                        <div class="itemsContador">
                                            <div class="masMenos">
                                             
                                                <input id="cantidad" class="btnCant"  type="number" style="text-align: center;" value=${cantidad} precio="${producto.precio}" readonly>
                                               
        
                                            </div>


                                            <button class="btn2" type="button" id="menos" menos="${producto.precio}">-</button>
                                                <input id="cantidad1" type="number" style="text-align: center;" value="${cantidad}">
                                            <button class="btn2" type="button" id="mas" precio="${producto.precio}">+</button>

        
                                            <div class="eliminar">
                                                <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="Imagenes/E-Commerce/papelera.png" alt="" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                                
                                            </div>
                                        </div>
        
                                            <div class="precio">
                                                <span class="carritoPrecio">
                                                    <span class="precioDolar">
                                                   U$S  ${producto.precio}</span>
                                                
                                                    </span>
                                            </div>
                                </div>
        
        
                            </div>
        
                            
                    </div>            
            
        </div>  
            `
            
    
            listadoCarrito.append(artDiv)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            
            

            
        })
        agregaBtnsEliminar()
        agregaBtnsMas()
        
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
    EliminarValorTotalCarrito(artiSeleccionado)
    imprimirCarro()


}

const EliminarValorTotalCarrito=(articulo)=>{
let cantidadInput=document.getElementById('cantidad').value

let precioEliminar=articulo.precio*cantidadInput
let totalEliminar=totalFinal-precioEliminar
totalFinal=totalEliminar
document.getElementById('spanTotal').textContent=totalFinal 
localStorage.setItem('TotalFinal',totalFinal)



}

const ActualizarTotal=(precio,cantidadRecibida)=>{
    
    
let total= precio * cantidadRecibida
 totalFinal+=total

document.getElementById('spanTotal').textContent=totalFinal 


   
}


const AlertaDescuentos=()=>{
  
    Swal.fire({
        title: '15 % OFF!',
        text: 'En todas las prendas Outlet',
        imageUrl: 'Imagenes/E-Commerce/Outlet.jpg',
        imageWidth: 600,
        imageHeight: 340,
        imageAlt: 'Outlet',
        confirmButton: false,
        showConfirmButton:false,
        allowEnterKey:true, 
        allowOutsideClick:true,
        })
}


//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------

renderizarListProductos()
localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || agregaBtnsCantidad() ||  AlertaDescuentos()  



