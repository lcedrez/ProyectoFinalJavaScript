
//Declaraciones
//---------------------------------------------------------------------------------------------------






const productoDetalle=document.querySelector('#ContenedorGr')
      



const agregarListennerImagen =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
     const clickImagen=document.querySelectorAll('.imgDetalle')
     clickImagen.forEach((img)=>{
         
     img.addEventListener('click',imprimirDetalle)
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
        console.log(data)

        Object.keys(data).forEach(key => {
         
            let arrayProductos = data[key]; 
            
           
           
           let artEncontrado = arrayProductos.find(auxiliar => auxiliar.cod_articulo === idSeleccionado);
         

           

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
                                        <button id="btnCarro" type="button" class="btn btn-primary"> Agregar al Carrito</button>
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
               
           
          });



     }

  
    
       
}
agregarListennerImagen()
imprimirDetalle()