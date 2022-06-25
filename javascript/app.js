
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
let cantidad=1
let cantidadMas=1
let precioPorCantidad=0
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo11]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]
let totales=[]

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
        
        if(!ExisteArtenCarro(artiSeleccionado))
        {
            carrito.push(artiSeleccionado)
           
            ActualizarTotal(artiSeleccionado)
            localStorage.setItem('TotalFinal',totalFinal)
            toastCarrito()
            imprimirCarro()
        }
        /*
        !ExisteArtenCarro(artiSeleccionado)&& carrito.push(artiSeleccionado) && totales.push(artiSeleccionado.cod_articulo,artiSeleccionado.precio,cantidad,precioPorCantidad) && ActualizarTotal(artiSeleccionado.precio,cantidad) &&localStorage.setItem('TotalFinal',totalFinal)
        toastCarrito()
        imprimirCarro()
        */
        console.log(totales)
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

const cantidadElegidaCarr=()=>{
    
    const cantElig=document.querySelectorAll('.cantCarr')
    cantElig.forEach((cant)=>{
        cant.addEventListener('change',prueba)
        })
       
    
 
}

// creo esta funcion para actualizar el la cantidad y el total del pedido

const prueba=()=>{
console.log('prueba OK')
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
                                 


                                        <label for="cant">Cant:</label>
                                        
                                        <select class="cantCarr" >
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="4">5</option>
                                        </select>
        
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



const ActualizarTotal=(artrecibido)=>{
    
totalFinal=+ artrecibido.precio
document.getElementById('spanTotal').textContent=totalFinal 
}


//esto creo que tengo que eliminarlo
const ActualizarTotalMas=(precio,cantidadRecibida)=>{
    let totalAmostrar
    let totRecibido
    totalAmostrar=document.getElementById('spanTotal')
    
    totRecibido=precio*cantidadRecibida     
    console.log(totRecibido,cantidadRecibida    )
    totalAmostrar =+totRecibido
    console.log(totalAmostrar)
    totalAmostrar = -precio
    document.getElementById('spanTotal').textContent=totalAmostrar
    console.log(totalAmostrar)
    }


AlertaDescuentos=()=>{
  
    Swal.fire({
        title: '15 % OFF!',
        text: 'En todas las prendas Outlet',
        textColor: '#F12E05',
        imageUrl: 'Imagenes/E-Commerce/Outlet.jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Outlet',
        confirmButton: false,
        showConfirmButton:false,
        allowEnterKey:true, 
        allowOutsideClick:true,
        
        })
}


toastCarrito=()=>{
    Toastify({

        text: "Articulo Agregado" ,
        position: "left",   
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
}


const   ultimoItemCarrito = (art) => { 
    let ultArt=carrito[carrito.length-1];  
    console.log(`Last element is ${ultArt}`); 
    
  }  

//EventListeners    
//---------------------------------------------------------------------------------------------------------



//Ejecuciones   
//---------------------------------------------------------------------------------------------------------

renderizarListProductos()
localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() ||  AlertaDescuentos() || 
cantidadElegidaCarr() 
  


