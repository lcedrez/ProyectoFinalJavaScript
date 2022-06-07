

class Articulo{
    constructor(cod_articulo,descripcion,precio,descuento){
        this.cod_articulo=cod_articulo;
        this.descripcion=descripcion;
        this.precio=precio;
        this.descuento=descuento;
    }
}

class Usuario{
    constructor(nombre,apellido,user,password){
    this.nombre=nombre;
    this.apellido=apellido;
    this.user=user;
    this.password=password;    
    }

}


const articulo1= new Articulo("1144","Let It Be Special Edition – Standard LP<",2500,0)
const articulo2= new Articulo("2244","Let It Be Embroidered Blue Crewneck",4200,0)
const articulo3= new Articulo("3344","Let It Be Photo Red Crewneck",5200,0)
const articulo4= new Articulo("4444","Let It Be Silver Vintage Black T-Shirt",8250,0)

const usuario1=new Usuario("Luciano","Cedrez","lcedrez","12345678")
const usuario2=new Usuario("Juan","Perez","jperez","87654321")
const usuario3=new Usuario("Carlos","Gonzalez","cgonzalez","Carlos2487")
const usuario4=new Usuario("Luis","Martinez","lmartinez","Luis4545")



let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4 ]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
const carrito=[]





function ValidarIngreso(usuarioIngresado,passIngresado)
{
    if(usuarioIngresado === '' || passIngresado === '')
    {
        alert("Uno de los campos está vacío");
       return false;
    }
     else 
    {
        const resultado = usuSistema.find(auxiliar => auxiliar.user==usuarioIngresado)
        if(resultado==undefined)
        {
            alert("Usuario No existe!!")
            return false
        }
        else if(resultado.user==usuarioIngresado && resultado.password===passIngresado )
        {
         return true
        }
        else
        {
            return false
        }
        
       
    }
       


}






function validar(cantidad)
{
    if(cantidad === '')
    {
        alert("El campo esta vacío");
       return false;
    }
    else if(isNaN(cantidad))
       {
        
        {
            alert("Debe Ingresar un Número")

            return false
        }
    }
    else if(cantidad==0)
    {
        alert("La cantidad debe ser mayor a 0")
        
        return false
    }
    else
    {
        return true
    }
}

function recogerDatos(){
    let usuIngresado=document.getElementById("IngresoUser").value;
    let IngresoPass=document.getElementById("IngresoPass").value;

    

if( ValidarIngreso(usuIngresado,IngresoPass)==false)
  {
    alert("Usuario o Clave Incorrecta!!")
   
  }
  else
  {
    alert("Bienvenido a la Tienda THE BEATLES")
    alert("A continuación un listado de nuestros Articulos")

    alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



    while (confirm("Desea comprar algun Articulo?"))
        {
        true;
            
            codIngresado=prompt("Ingrese Codigo del Articulo:")
        
            
        while(validar(codIngresado)==false)
        {
            codIngresado=prompt("Ingrese Codigo del Articulo:")
        }

        
        let resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
        if(resultado != null)
        {
            
                
                alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
                confirm("Desea Agregar este Articulo al carrito?")
                {

                    cantIngresada=prompt("Ingrese Cantidad:")
                    while(validar(cantIngresada)==false)
                    {
                        
                        cantIngresada=prompt("Ingrese Cantidad:")
                    }
                    let total= resultado.precio *cantIngresada

                    alert("El precio total de la compra es : $"+total)
                    totalFinal +=total
                    
                }
        }    
        else
        {
            alert("ESTE ARTICULO NO EXISTE!!")
        }    

        }
        
        alert("El Total a pagar es de $ " + " "+ totalFinal )

  }

  
  
  
  
    
}











/*
while(confirm("Desea Loguearse al Sistema de Tienda??"))
{
usuarioIngresado=prompt("Ingrese Usuario : ")
while( ValidarUsuario(usuarioIngresado)==false)
{
    
    usuarioIngresado=prompt("Ingrese Usuario : ")
}


if(usuSistema.some((variable)=>variable.user== usuarioIngresado)==true)
{

    clave=prompt("Ingrese Clave : ")
    while( ValidarClave(clave,usuarioIngresado)==false)
    {
        
        clave=prompt("Ingrese Clave : ")
    }

    

   
    
        
        alert("Bienvenido a la Tienda THE BEATLES")
        alert("A continuación un listado de nuestros Articulos")

        alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



        while (confirm("Desea comprar algun Articulo?"))
            {
            true;
                
                codIngresado=prompt("Ingrese Codigo del Articulo:")
            
                
            while(validar(codIngresado)==false)
            {
                codIngresado=prompt("Ingrese Codigo del Articulo:")
            }

            
            let resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
            if(resultado != null)
            {
                
                    
                    alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
                    confirm("Desea Agregar este Articulo al carrito?")
                    {

                        cantIngresada=prompt("Ingrese Cantidad:")
                        while(validar(cantIngresada)==false)
                        {
                            
                            cantIngresada=prompt("Ingrese Cantidad:")
                        }
                        let total= resultado.precio *cantIngresada

                        alert("El precio total de la compra es : $"+total)
                        totalFinal +=total
                        
                    }
            }    
            else
            {
                alert("ESTE ARTICULO NO EXISTE!!")
            }    

            }
            
            alert("El Total a pagar es de $ " + " "+ totalFinal )
            

            }
            else
            {
                alert("No existe Usuario!!")
            }

        
      
        
}
 






/*
alert("Bienvendios a la Tienda THE BEATLES")
alert("A continuación un listado de nuestros Articulos"+"\n"+"Hoy todo con un 25% de Descuento!!!")

alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



while (confirm("Desea comprar algun Articulo?"))
    {
     true;
        
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       
        
       while( Validar(codIngresado)==false)
       {
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       }

     
      
       if(artVentas.some((art)=>art.cod_articulo==codIngresado)==true)
       {
           
            const resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
            alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
            confirm("Desea Agregar este Articulo al carrito?")
            {

                cantIngresada=prompt("Ingrese Cantidad:")
                while(validarCantidades(cantIngresada)==false)
                {
                    
                    cantIngresada=prompt("Ingrese Cantidad:")
                }
                let total= resultado.precio *cantIngresada

                alert("El precio total de la compra es : $"+total)
                 totalFinal +=total
                
            }
       }    
       else
       {
           alert("ESTE ARTICULO NO EXISTE!!")
       }    

    }
       
    alert("El Total a pagar es de $ " + " "+ totalFinal )
       
       /*
        if(codIngresado=="1144")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo1.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo1.precio,cantidadIngresada,articulo1.descuento)
                var resultadoFinal= CalculoDescuentos(articulo1.precio,articulo1.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo1.precio
                
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }

        }
        */
    








/*Segundo Entregable 


function Articulo(cod_articulo,descripcion,precio,descuento,cantPdesc){

    this.cod_articulo=cod_articulo;
    this.descripcion=descripcion;
    this.precio=precio;
    this.descuento=descuento;
    this.cantPdesc=cantPdesc;
  
    
}



function CalculoDescuentos(precio,descuento,cantidad)
{
    var calculo
    var resultado

    calculo=descuento* precio*cantidad/100 
    resultado=precio * cantidad -calculo
    return resultado
}

function CalculoaDescontar(precio,cantidad,descuento)
{
    var descaplicado
   descaplicado= descuento * precio*cantidad/100

   return descaplicado
}

function Validar(variable)
{
    if(variable === ''){
        alert("El campo esta vacío");
       return false;
       }
       else
       {
        if(isNaN(variable))
        {
            alert("Debe Ingresar un Número")

            return false
        }
        else
        {
            return true
        }

       }
}





function validarCantidades(cantidad)
{
    if(cantidad === '')
    {
        alert("El campo esta vacío");
       return false;
    }
    else if(isNaN(cantidad))
       {
        
        {
            alert("Debe Ingresar un Número")

            return false
        }
    }
    else if(cantidad==0)
    {
        alert("La cantidad debe ser mayor a 0")
        
        return false
    }
    else
    {
        return true
    }
    

    

}



const articulo1= new Articulo("1144","Amoxidal",1200,10,2)
const articulo2= new Articulo("2244","Crema Anti Age",2500,5,2)
const articulo3= new Articulo("3344","Ibuprofeno",900,15,5)
const articulo4= new Articulo("4444","Aspirina",500,10,3)
const articulo5= new Articulo("5544","Bisolvon",2800,20,4)


var codIngresado=0
var cantidadIngresada=0
var preciofinal=0
let TotalAcumulado =[]



alert("Bienvenido a FarmaShop, a continuación el listado de nuestros articulos")


alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo5.cod_articulo+"\n" +"Descricpion: "+ articulo5.descripcion+"\n"+"Precio: "+"$"+articulo5.precio+"\n"+"------------------------------------")
console.table(articulo1)
console.table(articulo2)
console.table(articulo3)
console.table(articulo4)
console.table(articulo5)







while (confirm("Desea comprar algun Articulo?"))
    {
     true;
        
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       while( Validar(codIngresado)==false)
       {
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       }
        if(codIngresado=="1144")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo1.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo1.precio,cantidadIngresada,articulo1.descuento)
                var resultadoFinal= CalculoDescuentos(articulo1.precio,articulo1.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo1.precio
                
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }



          
   
        }
        else if(codIngresado=="2244")
        {
           alert("El Articulo elegido es"+ " " +articulo2.descripcion + "\n" + "Su precio es :$"+articulo2.precio+"\n"+"si compra más de "+" "+articulo2.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo2.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo2.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo2.precio,cantidadIngresada,articulo2.descuento)
                var resultadoFinal= CalculoDescuentos(articulo2.precio,articulo2.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo2.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else if(codIngresado=="3344")
        {
           alert("El Articulo elegido es"+ " " +articulo3.descripcion + "\n" + "Su precio es :$"+articulo3.precio+"\n"+"si compra más de "+" "+articulo3.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo3.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo3.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo3.precio,cantidadIngresada,articulo3.descuento)
                var resultadoFinal= CalculoDescuentos(articulo3.precio,articulo3.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo3.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else if(codIngresado=="4444")
        {
           alert("El Articulo elegido es"+ " " +articulo4.descripcion + "\n" + "Su precio es :$"+articulo4.precio+"\n"+"si compra más de "+" "+articulo4.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo2.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo4.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo4.precio,cantidadIngresada,articulo4.descuento)
                var resultadoFinal= CalculoDescuentos(articulo4.precio,articulo4.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
                
            }
           else
           {
                preciofinal=cantidadIngresada*articulo4.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }

        else if(codIngresado=="5544")
        {
           alert("El Articulo elegido es"+ " " +articulo5.descripcion + "\n" + "Su precio es :$"+articulo5.precio+"\n"+"si compra más de "+" "+articulo5.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo5.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo2.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo5.precio,cantidadIngresada,articulo5.descuento)
                var resultadoFinal= CalculoDescuentos(articulo5.precio,articulo5.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
            {
                preciofinal=cantidadIngresada*articulo5.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else{
            alert("El Articulo No Existe!!")
            
            }



    }



        let suma=0;
        for(let i=0;i<TotalAcumulado.length;i++){
            suma+=TotalAcumulado[i];
        }
    

    alert("El Total a pagar es de $ " + " "+ suma )









/*Primer Entregable
var numero=0
var contador =0
var intentos=5

alert('Adivina el numero del 1 al 10 en 5 intentos')
while(numero!=3)
{
    
    numero=prompt("Ingrese Número:")
    if(isNaN(numero))
    {
        alert("Debe Ingresar un Numero no se permiten Textos")
    }
   else if(numero <=0 || numero > 10)
    {
        alert("Debe Ingresar un Número entre 1 y 10")
       
    }
    else{

    if(numero==3)
    {
        alert("Felicitaciones adivinaste el numero!!")
    }
    else
    {
        
            contador++
            cantidad=5-contador
            
            alert("Fallaste te quedan" +' '+ cantidad + ' '+  'Intentos')

    }
    if(contador==5)
    {
        alert("Lo siento has perdido el Juego!!")
    }
    
}
       
    

   
}

   */




   

