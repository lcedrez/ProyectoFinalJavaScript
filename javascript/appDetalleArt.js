let carrito=[]
//Declaraciones
//---------------------------------------------------------------------------------------------------
const clickCarrito=document.querySelector('#carritoSearch')

const productoDetalle=document.querySelector('#ContenedorGr')

const agregarArticuloCarrito= (e) => {
    
    const idSeleccionado = e.target.getAttribute('codigo')
    let  catalogo = JSON.parse(localStorage.getItem('catalogo')) ||  []

    
    const artiSeleccionado  =catalogo.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
        
        if(!ExisteArtenCarro(artiSeleccionado))
        {
            carrito.push(artiSeleccionado)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            ActualizarTotal(artiSeleccionado.precio)
           
            ActualizaItems()
            AlertaAgregaCarrito(artiSeleccionado)
            
            
        }
    
}   


const agregaBtnDetalle =()=>{
    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
        
    boton.addEventListener('click',agregarArticuloCarrito)
    })
}

      





 





 function imprimirDetalle(){
   
   const idSeleccionado= localStorage.getItem('idSeleccionado')
    
    let url= "https://demo4551182.mockable.io/catalogo"
     fetch(url)
     .then(response=>response.json())
     .then(data=>mostrarData(data))
     .catch(error=>console.log(error))
     const mostrarData=(data)=>{
        

        Object.keys(data).forEach(key => {
         
            let arrayProductos = data[key]; 
            
           
           
           let artEncontrado = arrayProductos.find(auxiliar => auxiliar.cod_articulo === idSeleccionado);
         
           
           if(artEncontrado.categoria==="Outfit"){
            const artDetalle = document.createElement('div')
            productoDetalle.innerHTML=""
            artDetalle.className='container'
            artDetalle.innerHTML=`
 
            <div class="row">
                 <div id="bloqueCat" class="col-xs-6">
                     <div class="row">
                         <div id="bloqueImg" class="col-xs-6">
                             <img src="../${artEncontrado.imagen}" alt="">
                         </div>
                            
                         <div id="bloqueDetalle" class="col-xs-6">
                             <div class="row">
                                 <div id="productoNombre" class="hidden-xs col-sm-6">
                                     <div id="productoNombreComponenteId" class="productoNombreComponente">
                                       
                                         <div>${artEncontrado.nombre}</div>
                                         <select id="dropDetalle" class="dropDet" >
                                             <option hidden value="default">Size</option>
                                               <option value="1">Small</option>
                                               <option value="2">medium</option>
                                               <option value="3">Large</option>
                                               <option value="4">X-Large</option>
                                               
                                         </select>
 
                                         
                                     </div>
                                     <br>
                                     <select id="dropCant" class="cantCarrDet">
                                         <option hidden value="default">1</option>
                                           <option value="1">1</option>
                                           <option value="2">2</option>
                                           <option value="3">3</option>
                                           <option value="4">4</option>
                                           <option value="5">5</option>
                                           <option value="6">6</option>
                                           <option value="7">7</option>
                                           <option value="8">8</option>
                                           <option value="9">9</option>
                                           <option value="10">10 </option>
                                         </select>
                                         <br>
                                         <hr class="lineaH">
                                         <div id="boxColor" >Color: ${artEncontrado.color}</div>
                                         <div id="boxCat" >Categoria: ${artEncontrado.categoria}</div>
                                 </div>
                                
                                 
                             </div>
                             <div class="row">
                                 <div id="productoPrecio" class="hidden-xs col-sm-6">
                                     <div id="productoPrecioComponenteId" class="productoPrecioComponente">
                                         <div id="boxPrecio">U$S ${artEncontrado.precio}</div>
                                         <div id="boxCodigo">codigo: ${artEncontrado.cod_articulo}</div>
                                         <button  codigo="${artEncontrado.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                                        
                                     </div>
                                     
                                 </div>
 
                             </div>
                             <div class="row">
                                 <div id="productoDetalle" class="hidden-xs col-sm-6">
                                     <div id="productoDetalleDesc" class="productoDescripcion">
                                         <div>
                                             <hr class="lineaH">
                                             <p class="parrafoDetalle"> ${artEncontrado.descripcion}</p>
                                         </div>
 
                                     </div>
                                 </div>
 
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div>
 
         </div>
 
 
 
                `
                
                productoDetalle.append(artDetalle)
                agregaBtnDetalle()
     
               
           }
           else
           {
            const artDetalle = document.createElement('div')
            productoDetalle.innerHTML=""
            artDetalle.className='container'
            artDetalle.innerHTML=`
 
            <div class="row">
                 <div id="bloqueCat" class="col-xs-6">
                     <div class="row">
                         <div id="bloqueImg" class="col-xs-6">
                             <img src="../${artEncontrado.imagen}" alt="">
                         </div>
                            
                         <div id="bloqueDetalle" class="col-xs-6">
                             <div class="row">
                                 <div id="productoNombre" class="hidden-xs col-sm-6">
                                     <div id="productoNombreComponenteId" class="productoNombreComponente">
                                       
                                         <div>${artEncontrado.nombre}</div>
                                 
                                     </div>
                                     <br>
                                     <select id="dropCant" class="cantCarrDet">
                                         <option hidden value="default">1</option>
                                           <option value="1">1</option>
                                           <option value="2">2</option>
                                           <option value="3">3</option>
                                           <option value="4">4</option>
                                           <option value="5">5</option>
                                           <option value="6">6</option>
                                           <option value="7">7</option>
                                           <option value="8">8</option>
                                           <option value="9">9</option>
                                           <option value="10">10 </option>
                                         </select>
                                         <br>
                                         <hr class="lineaH">
                                         <div id="boxColor" >Color: ${artEncontrado.color}</div>
                                         <div id="boxCat" >Categoria: ${artEncontrado.categoria}</div>
                                 </div>
                                
                                 
                             </div>
                             <div class="row">
                                 <div id="productoPrecio" class="hidden-xs col-sm-6">
                                     <div id="productoPrecioComponenteId" class="productoPrecioComponente">
                                         <div id="boxPrecio">U$S ${artEncontrado.precio}</div>
                                         <div id="boxCodigo">codigo: ${artEncontrado.cod_articulo}</div>
                                         <button codigo="${artEncontrado.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                                         
                                     </div>
                                     
                                 </div>
 
                             </div>
                             <div class="row">
                                 <div id="productoDetalle" class="hidden-xs col-sm-6">
                                     <div id="productoDetalleDesc" class="productoDescripcion">
                                         <div>
                                             <hr class="lineaH">
                                             <p class="parrafoDetalle"> ${artEncontrado.descripcion}</p>
                                         </div>
 
                                     </div>
                                 </div>
 
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div>
 
         </div>
 
 
 
                `
                
                productoDetalle.append(artDetalle)
                agregaBtnDetalle()
                agregaBtnsCant()
     

           }

          
               
           
          });

        
        

     }
    
    
       
}



const paginaCarrito=()=>{
    
   window.location.href = "../Paginas/carrito.html";
  

}

const ExisteArtenCarro=(artrecibido)=>{
    const variable = carrito.some((aux)=>aux.cod_articulo==artrecibido.cod_articulo) 
    return variable
}


clickCarrito.addEventListener('click',paginaCarrito)


const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    
   

}


const agregaBtnsCant =()=>{

    
    const cantEleg=document.querySelectorAll('.cantCarr')
 
   
    cantEleg.forEach((cant)=>{
        cant.addEventListener('change',ActualizaTotalCarrito)
        })
       


}




const recuperarTotal=()=>{
    
   totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
}


const ActualizaItems=()=>{


    
    const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    
   
    document.getElementById('cantidadItem').textContent=items
    
    
}

const ActualizarTotal=(valorRecibido)=>{
    totalFinal+=parseInt(valorRecibido) 
    document.getElementById('spanTotal').textContent=totalFinal 
    localStorage.setItem('TotalFinal',totalFinal)  
    
    
    }

    const ActualizaTotalCarrito =(e)=>{
        //obtengo los datos del DOM para actualizar Sub Total y carrito
    
        const precioArt =e.target.getAttribute('precio')
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
    
    



imprimirDetalle()


localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || ActualizaItems()