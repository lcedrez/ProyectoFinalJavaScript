let usuarios=[]


const recuperarUsuarios=()=>{
    
    usuarios = JSON.parse(localStorage.getItem('usuarios')) 
     
    
 }




 const agregarListennerUser =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
    const user=document.querySelector('#usuario')
  
    
         
     user.addEventListener('blur',existeUser)
   
    
    
 
 
 }


   
    

    
 
 
 


 

 const agregarListennerPass =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
    
    const pass=document.querySelector('#pass')
    
         
     
     pass.addEventListener('keypress',validarPass)
    
    
 
 
 }


 const agregarClickBtn =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
    
    const pass=document.querySelector('#log')
    
         
     
     pass.addEventListener('click',redireccion)
    
    
 
 
 }



const Cargausuarios = async ()=>{
    try{
   const respuesta=await fetch("https://demo4551182.mockable.io/login")
   
   if(respuesta.status=== 200){
    const datos =await respuesta.json();

    //convierto mi objerto en un array
    Object.keys(datos).forEach(key => {
         
        let arrayUsuarios = datos[key]; 

    
        
       localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios));
        
       

       
      
       
       
      });


   
   }
 
    }
    catch(error)
    {
        console.log(error)
    }
}



const existeUser =()=>{
    let valor = document.getElementById("usuario").value;
    
    const usuarioSelecc  =usuarios.find((auxiliar)=> auxiliar.user===valor)
    
    if (usuarioSelecc===undefined)
    {
        alert("no existe")
    }
 }


 const validarPass =(e)=>{

    if (e.key === "Enter") {
    let valorUser = document.getElementById("usuario").value;
    let valor = document.getElementById("pass").value;
    
    const usuarioSelecc =usuarios.find((auxiliar)=>auxiliar.user===valorUser&& auxiliar.password===valor)
    
    if (usuarioSelecc===undefined)
    {
        alert("password incorrecto")
    }
    else
    {
            
   
    
         
     
        window.location.href = "../Tienda.html";

    }
}
 }


 function redireccion(){
   
   
    
    window.location.href = "../Tienda.html"

     }


Cargausuarios()
recuperarUsuarios()
agregarListennerUser()
agregarListennerPass()
agregarClickBtn()
