
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo8,articulo9,articulo10,articulo11,articulo12]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]




//Query De Elementos
//-------------------------------------------------------------------------------------------------------

const listadoArticulos=document.querySelector('.container')
const cardContainer=document.getElementById('container');
  
  console.log(cardContainer)



//Funciones
//---------------------------------------------------------------------------------------------------------
const renderizarListaArticulos=()=>{
    artVentas.forEach((arti)=>{
        const artContenedor=document.createElement('div')
        artContenedor.className='card-body'
        artContenedor.innerHTML=`
                    <div class="card-body">
                    
                        <h4 class="card-title">${arti.descripcion}</h4>
                                            <img src=${arti.imagen} alt="${arti.descripcion}">
                                            <p class="card-text">$${arti.precio}</p>
                                            
                                            
                                            <p class="card-text"></p>
                                            <button codigo="${arti.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                    </div>  
                
        `
                    //Una vez insertado esto debemos agregarlo a la constante creada
                    listadoArticulos.append(artContenedor)
    })
}


//EventListeners    
//---------------------------------------------------------------------------------------------------------




//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListaArticulos()





    
   