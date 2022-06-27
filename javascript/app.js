
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
let contador=0  
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
            ActualizarTotal(artiSeleccionado.precio)
            console.log(totalFinal)
            toastCarrito()
            imprimirCarro()
            
        }
        /*
        !ExisteArtenCarro(artiSeleccionado)&& carrito.push(artiSeleccionado) && totales.push(artiSeleccionado.cod_articulo,artiSeleccionado.precio,cantidad,precioPorCantidad) && ActualizarTotal(artiSeleccionado.precio,cantidad) &&localStorage.setItem('TotalFinal',totalFinal)
        toastCarrito()
        imprimirCarro()
        */
        
}   



const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
    boton.addEventListener('click',renderizarArticulos)
    })
   


}

//creo funcion para eliminar articulos del carrito
const agregaBtnsEliminarCant =()=>{

    const eliminaBoton=document.querySelectorAll('.imgPapelera')
    const cantEleg=document.querySelectorAll('.cantCarr')
 
    eliminaBoton.forEach((boton)=>{
    boton.addEventListener('click',EliminarDeCarrito)
    })
    cantEleg.forEach((cant)=>{
        cant.addEventListener('change',ActualizaTotalCarrito)
        })
       


}





const ActualizaTotalCarrito =(e)=>{
    //obtengo los datos del DOM para actualizar Sub Total y carrito
    const precioArt = e.target.getAttribute('precio') 
    const id=e.target.getAttribute('id')
    const codigo = e.target.getAttribute('codigo')
    const cantidadSeleccionada = document.getElementById(id).value
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==codigo)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice

    let subTot=precioArt*cantidadSeleccionada  
    //le paso al array el nuevo dato de sub total
    carrito[indice].subTotal=subTot
    //sumo el subtotal del Array para actualizar el Resumen del pedido
    const suma = carrito.map(item => item.subTotal).reduce((prev, curr) => prev + curr, 0);
    document.getElementById('spanTotal').textContent=suma
   
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
            contador ++
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
                                        
                                        <select id="${contador}" class="cantCarr" precio="${producto.precio}" codigo="${producto.cod_articulo}" >
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                        </select>
        
                                            <div class="eliminar">
                                                <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="Imagenes/E-Commerce/papelera.png" alt="" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                                
                                            </div>
                                        </div>
        
                                            <div class="precio">
                                                <span class="carritoPrecio">
                                                    <span id="precio${contador}" class="precioDolar">
                                                   U$S ${producto.precio}</span>


                                                
                                                </span>
                                            </div>
                                </div>
        
        
                            </div>
        
                            
                    </div>            
            
        </div>  
            `
            
            
            listadoCarrito.append(artDiv)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            localStorage.setItem('contador',contador)  
           
        
            
            
        })

           
     
        


       
            
        agregaBtnsEliminarCant()
       
       
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



const ActualizarTotal=(valorRecibido)=>{
totalFinal+= valorRecibido
document.getElementById('spanTotal').textContent=totalFinal 
localStorage.setItem('TotalFinal',totalFinal)  

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
localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() ||  AlertaDescuentos() 

  


