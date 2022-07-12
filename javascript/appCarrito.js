
let contador=0 
let carrito=[]

const listadoCarrito=document.querySelector('#contenedorCarro')
//Declaraciones
//---------------------------------------------------------------------------------------------------


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
                        <div class="itemImagen"> <img src=../${producto.imagen} alt="" class="imgCarrrito"></div>
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
                                
                                <select id="${contador}" class="cantCarr" precio="${producto.precio}" codigo="${producto.cod_articulo}">
                                <option hidden value="default">${producto.cantidad}</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>

                                    <div class="eliminar">
                                        <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="../Imagenes/E-Commerce/papelera.png" alt="" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                        
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

const EliminarDeCarrito=(e)=>{
    const idSeleccionado = e.target.getAttribute('codigo')
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice
    carrito.splice(indice,1)
    localStorage.setItem('claveCarro', JSON.stringify(carrito)) 
    //actualizo cantidad de Items
    ActualizaItems()
   
    imprimirCarro()


}

const ActualizaTotalCarrito =(e)=>{
    //obtengo los datos del DOM para actualizar Sub Total y carrito

    const precioArt =e.target.getAttribute('precio')
    console.log(precioArt)
    const id=e.target.getAttribute('id')
    const codigo = e.target.getAttribute('codigo')
    const cantidadSeleccionada =parseInt(document.getElementById(id).value)
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==codigo)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice
   

    let subTot=precioArt*cantidadSeleccionada
    //le paso al array el nuevo dato de sub total
    
    carrito[indice].subTotal= subTot 
    carrito[indice].cantidad=cantidadSeleccionada 

    
    
    //sumo el subtotal del Array para actualizar el Resumen del pedido
    const suma =carrito.map(item => item.subTotal).reduce((prev, curr) => prev + curr, 0);
    
    document.getElementById('spanTotal').textContent=suma
    
    totalFinal=suma
    
    localStorage.setItem('ClaveCarro',carrito)
    localStorage.setItem('TotalFinal',totalFinal)
   
    ActualizaItems()
    

   

   
  }

  const ActualizaItems=()=>{


    
    const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  
    document.getElementById('cart-items-qty').textContent=items
    document.getElementById('cantidadItem').textContent=items
    
    

}



const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    imprimirCarro()
    

}

const recuperarTotal=()=>{
    
   totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
}


console.log(localStorage.getItem('claveCarro'))
localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() 

