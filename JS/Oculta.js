
function Recargar(){
    
    if(document.getElementById("ContenidoElectronico").style.display == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'block';

        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContenidoElectronico").style.display = 'none';
    }
}
function RecargarBic(){
    a=document.getElementById("ContBic").style.display;
    if(a == 'none'){
        
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'block';

        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContBic").style.display = 'none';
    }
}
function RecargarInd(){
    a=document.getElementById("ContInd").style.display;
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'block';

        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContInd").style.display = 'none';
    }
}
function RecargarMueble(){
    a=document.getElementById("ContMueble").style.display;
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'block';

        document.getElementById("ContOtro").style.display = 'none';
    }else{
        document.getElementById("ContMueble").style.display = 'none';
    }
}
function RecargarOtro(){
    a=document.getElementById("ContOtro").style.display 
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'block';
    }else{
        document.getElementById("ContOtro").style.display = 'none';
    }
}


function eleccion()
{
    var l=0;
    if (document.getElementById("ContenidoElectronico").style.display =='block')
    {
        if(document.getElementById("marca").value,document.getElementById("modelo").value,document.getElementById("color").value,
        document.getElementById("n_serie").value,document.getElementById("estado").value == "")
        {
            document.getElementById("marca").style.background="#ffcaca" ;
            document.getElementById("marca").style.borderColor="red" ;

            document.getElementById("modelo").style.background="#ffcaca" ;
            document.getElementById("modelo").style.borderColor="red" ;

            document.getElementById("color").style.background="#ffcaca" ;
            document.getElementById("color").style.borderColor="red" ;

            document.getElementById("n_serie").style.background="#ffcaca" ;
            document.getElementById("n_serie").style.borderColor="red" ;

            document.getElementById("estado").style.background="#ffcaca" ;
            document.getElementById("estado").style.borderColor="red" ;
            
            Swal.fire(
                'Algo salio mal',
                'Complete la informacion requerida',
                'Recuadro rojo'
              )
        }
        else{
            document.getElementById("marca").style.background="white" ;
            document.getElementById("marca").style.borderColor="#00000000"  ;

            document.getElementById("modelo").style.background="white" ;
            document.getElementById("modelo").style.borderColor="#00000000"  ;

            document.getElementById("color").style.background="white" ;
            document.getElementById("color").style.borderColor="#00000000"  ;

            document.getElementById("n_serie").style.background="white" ;
            document.getElementById("n_serie").style.borderColor="#00000000"  ;

            document.getElementById("estado").style.background="white" ;
            document.getElementById("estado").style.borderColor="#00000000"  ;

            /*var r=confirm("Confirmar envio de formulario...");
            if(r==true){
            //Siguiente();
            descargapdfelect(); l++;*/

            Swal.fire({
                title: 'Confirme envio de formulario',
                text: "Esta seguro que desea continuar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Formulario enviado',
                    'Descargando PDF',
                    'success' 
                    
                  )
                  descargapdfelect();
                  
                  
                }
            })
            
            
                       
            
        } 
        
        
           
     
        
       
          
}
        
    

    
    if(document.getElementById("ContBic").style.display =='block')
    {
        
    
    
        if(document.getElementById("tipo2").value,document.getElementById("marca2").value,document.getElementById("modelo2").value,
        document.getElementById("color2").value,document.getElementById("cuadro2").value,document.getElementById("Tallecuadro2").value,
        document.getElementById("Tallecubierta2").value,document.getElementById("material2").value,document.getElementById("cambio2").value,
        document.getElementById("frenos2").value,document.getElementById("Horquilla2").value == "")
        {
            document.getElementById("tipo2").style.background="#ffcaca" ;
            document.getElementById("tipo2").style.borderColor="red" ;

            document.getElementById("marca2").style.background="#ffcaca" ;
            document.getElementById("marca2").style.borderColor="red" ;

            document.getElementById("modelo2").style.background="#ffcaca" ;
            document.getElementById("modelo2").style.borderColor="red" ;

            document.getElementById("color2").style.background="#ffcaca" ;
            document.getElementById("color2").style.borderColor="red" ;

            document.getElementById("cuadro2").style.background="#ffcaca" ;
            document.getElementById("cuadro2").style.borderColor="red" ;

            document.getElementById("Tallecuadro2").style.background="#ffcaca" ;
            document.getElementById("Tallecuadro2").style.borderColor="red" ;

            document.getElementById("Tallecubierta2").style.background="#ffcaca" ;
            document.getElementById("Tallecubierta2").style.borderColor="red" ;

            document.getElementById("material2").style.background="#ffcaca" ;
            document.getElementById("material2").style.borderColor="red" ;

            document.getElementById("cambio2").style.background="#ffcaca" ;
            document.getElementById("cambio2").style.borderColor="red" ;

            document.getElementById("frenos2").style.background="#ffcaca" ;
            document.getElementById("frenos2").style.borderColor="red" ;

            document.getElementById("Horquilla2").style.background="#ffcaca" ;
            document.getElementById("Horquilla2").style.borderColor="red" ;
            
            Swal.fire(
                'Algo salio mal',
                'Complete la informacion requerida',
                'Recuadro rojo'
              )
        }
        else{
            document.getElementById("tipo2").style.background="white" ;
            document.getElementById("tipo2").style.borderColor="#00000000"  ;

            document.getElementById("marca2").style.background="white" ;
            document.getElementById("marca2").style.borderColor="#00000000"  ;

            document.getElementById("modelo2").style.background="white" ;
            document.getElementById("modelo2").style.borderColor="#00000000"  ;

            document.getElementById("color2").style.background="white" ;
            document.getElementById("color2").style.borderColor="#00000000"  ;

            document.getElementById("cuadro2").style.background="white" ;
            document.getElementById("cuadro2").style.borderColor="#00000000"  ;

            document.getElementById("Tallecuadro2").style.background="white" ;
            document.getElementById("Tallecuadro2").style.borderColor="#00000000"  ;

            document.getElementById("Tallecubierta2").style.background="white" ;
            document.getElementById("Tallecubierta2").style.borderColor="#00000000"  ;

            document.getElementById("material2").style.background="white" ;
            document.getElementById("material2").style.borderColor="#00000000"  ;

            document.getElementById("cambio2").style.background="white" ;
            document.getElementById("cambio2").style.borderColor="#00000000"  ;

            document.getElementById("frenos2").style.background="white" ;
            document.getElementById("frenos2").style.borderColor="#00000000"  ;

            document.getElementById("Horquilla2").style.background="white" ;
            document.getElementById("Horquilla2").style.borderColor="#00000000"  ;

            /*var r=confirm("Confirmar envio de formulario...");
            if(r==true){
            //Siguiente();
            descargapdfelect(); l++;*/

            Swal.fire({
                title: 'Confirme envio de formulario',
                text: "Esta seguro que desea continuar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Formulario enviado',
                    'Descargando PDF',
                    'success'
                    
                  )
                  descargapdfbici();
                  
                }
              })
      
       
        
    }
}
    if(document.getElementById("ContInd").style.display =='block')
    {
        if(document.getElementById("tipo3").value,document.getElementById("marca3").value,document.getElementById("Talle3").value,
        document.getElementById("color3").value== "")
        {
            document.getElementById("tipo3").style.background="#ffcaca" ;
            document.getElementById("tipo3").style.borderColor="red" ;

            document.getElementById("marca3").style.background="#ffcaca" ;
            document.getElementById("marca3").style.borderColor="red" ;

            document.getElementById("Talle3").style.background="#ffcaca" ;
            document.getElementById("Talle3").style.borderColor="red" ;

            document.getElementById("color3").style.background="#ffcaca" ;
            document.getElementById("color3").style.borderColor="red" ;

           
            
            Swal.fire(
                'Algo salio mal',
                'Complete la informacion requerida',
                'Recuadro rojo'
              )
        }
        else{
            document.getElementById("tipo3").style.background="white" ;
            document.getElementById("tipo3").style.borderColor="#00000000"  ;

            document.getElementById("marca3").style.background="white" ;
            document.getElementById("marca3").style.borderColor="#00000000"  ;

            document.getElementById("Talle3").style.background="white" ;
            document.getElementById("Talle3").style.borderColor="#00000000"  ;

            document.getElementById("color3").style.background="white" ;
            document.getElementById("color3").style.borderColor="#00000000"  ;


            Swal.fire({
                title: 'Confirme envio de formulario',
                text: "Esta seguro que desea continuar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Formulario enviado',
                    'Descargando PDF',
                    'success'
                    
                  )
                  descargapdfindu();
                 
                }
              })
        }
    }
    if(document.getElementById("ContMueble").style.display =='block')
    {
        if(document.getElementById("TipodeMueble4").value,document.getElementById("Material4").value,document.getElementById("Color4").value,
        document.getElementById("Dimenciones4").value,document.getElementById("Estado4").value== "")
        {
            document.getElementById("TipodeMueble4").style.background="#ffcaca" ;
            document.getElementById("TipodeMueble4").style.borderColor="red" ;

            document.getElementById("Material4").style.background="#ffcaca" ;
            document.getElementById("Material4").style.borderColor="red" ;

            document.getElementById("Color4").style.background="#ffcaca" ;
            document.getElementById("Color4").style.borderColor="red" ;

            document.getElementById("Dimenciones4").style.background="#ffcaca" ;
            document.getElementById("Dimenciones4").style.borderColor="red" ;

            document.getElementById("Estado4").style.background="#ffcaca" ;
            document.getElementById("Estado4").style.borderColor="red" ;


                       
            Swal.fire(
                'Algo salio mal',
                'Complete la informacion requerida',
                'Recuadro rojo'
              )
        }
        else{
            document.getElementById("TipodeMueble4").style.background="white" ;
            document.getElementById("TipodeMueble4").style.borderColor="#00000000"  ;

            document.getElementById("Material4").style.background="white" ;
            document.getElementById("Material4").style.borderColor="#00000000"  ;

            document.getElementById("Color4").style.background="white" ;
            document.getElementById("Color4").style.borderColor="#00000000"  ;

            document.getElementById("Dimenciones4").style.background="white" ;
            document.getElementById("Dimenciones4").style.borderColor="#00000000"  ;

            document.getElementById("Estado4").style.background="white" ;
            document.getElementById("Estado4").style.borderColor="#00000000"  ;

            Swal.fire({
                title: 'Confirme envio de formulario',
                text: "Esta seguro que desea continuar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Formulario enviado',
                    'Descargando PDF',
                    'success'
                    
                  )
                  descargapdfmueble()
                  
                }
              })
        }
        
       
    }
    if(document.getElementById("ContOtro").style.display =='block')
    {
        if(document.getElementById("txtOtro").value,document.getElementById("Producto5").value== "")
        {
            document.getElementById("txtOtro").style.background="#ffcaca" ;
            document.getElementById("txtOtro").style.borderColor="red" ;

            document.getElementById("Producto5").style.background="#ffcaca" ;
            document.getElementById("Producto5").style.borderColor="red" ;

                       
            Swal.fire(
                'Algo salio mal',
                'Complete la informacion requerida',
                'Recuadro rojo'
              )
        }
        else{
            document.getElementById("txtOtro").style.background="white" ;
            document.getElementById("txtOtro").style.borderColor="#00000000"  ;

            document.getElementById("Producto5").style.background="white" ;
            document.getElementById("Producto5").style.borderColor="#00000000"  ;


            Swal.fire({
                title: 'Confirme envio de formulario',
                text: "Esta seguro que desea continuar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Formulario enviado',
                    'Descargando PDF',
                    'success'
                    
                  )
                  descargapdfotros()
                  
                }
              })
        }
        
        
    }
    //if(l!=0){
   //    alert("Descargando comprobante...");
  //      Recarga();
   // }
  
}
function Recarga(){
    setTimeout(location.reload(),3000);
    
}







//-------------- Accesorio ------------------
function accesorioSi(){
    document.getElementById("NO").checked=false
    if(document.getElementById("SI").checked ){
        document.getElementById("accesorio").style.display = 'block';
    }else{
        document.getElementById("accesorio").style.display = 'none';
    }
}
function accesorioNo(){
    document.getElementById("SI").checked=false
    if(document.getElementById("NO").checked ){
        document.getElementById("accesorio").style.display = 'none';
    }
}
//-------------- Canje y venta ------------------
function Venta(){
    document.getElementById("rbCanje").checked=false
    document.getElementById("Pesos").style.display = 'inline-flex';
    document.getElementById("bxVenta").style.display = 'inline-flex';
    document.getElementById("bxCanje").style.display = 'none';
    document.getElementById("bxCanjee").style.display = 'none';
}
function Canje(){
    document.getElementById("rbVenta").checked=false
    
    document.getElementById("Pesos").style.display = 'none';
    document.getElementById("bxVenta").style.display = 'none';
    document.getElementById("bxCanje").style.display = 'inline-flex';   
    document.getElementById("bxCanjee").style.display = 'inline-flex';
}

//-------------- Siguiene ------------------

/*function myFunction() {
    var r=confirm("Confirmar envio de formulario...");
    if(r==true){
        Siguiente();
    }
}*/

function Siguiente(){
  var i=0;
  

    if(document.getElementById("NombreVendedor").value == ""){
        document.getElementById("NombreVendedor").style.background="#ffcaca" ;
        document.getElementById("NombreVendedor").style.borderColor="red" ;
        i++;    }
        else{
            document.getElementById("NombreVendedor").style.background="white" ;
        document.getElementById("NombreVendedor").style.borderColor="#00000000"  ;
        }
       
    if(document.getElementById("ApellidoVendedor").value == ""){
        document.getElementById("ApellidoVendedor").style.background="#ffcaca" ;
        document.getElementById("ApellidoVendedor").style.borderColor="red" ; i++; }
        else{
            document.getElementById("ApellidoVendedor").style.background="white" ;
        document.getElementById("ApellidoVendedor").style.borderColor="#00000000"  ;
        }

     if(document.getElementById("dni").value == ""){
            document.getElementById("dni").style.background="#ffcaca" ;
            document.getElementById("dni").style.borderColor="red" ; i++; }
            else{
                document.getElementById("dni").style.background="white" ;
            document.getElementById("dni").style.borderColor="#00000000"  ;
            }

      if(document.getElementById("DomicilioVendedor").value == ""){
               document.getElementById("DomicilioVendedor").style.background="#ffcaca" ;
                 document.getElementById("DomicilioVendedor").style.borderColor="red" ; i++; }
                 else{
                    document.getElementById("DomicilioVendedor").style.background="white" ;
                document.getElementById("DomicilioVendedor").style.borderColor="#00000000"  ;
                }

       if(document.getElementById("TelefonoVendedor").value == ""){
                    document.getElementById("TelefonoVendedor").style.background="#ffcaca" ;
                     document.getElementById("TelefonoVendedor").style.borderColor="red" ; i++; }
                     else{
                        document.getElementById("TelefonoVendedor").style.background="white" ;
                    document.getElementById("TelefonoVendedor").style.borderColor="#00000000"  ;
                    }

                   //-------------- Comprador ------------------
      if(document.getElementById("nombre2").value == ""){
                  document.getElementById("nombre2").style.background="#ffcaca" ;
                    document.getElementById("nombre2").style.borderColor="red" ; i++; }
                    else{
                        document.getElementById("nombre2").style.background="white" ;
                    document.getElementById("nombre2").style.borderColor="#00000000"  ;
                    }
        
        if(document.getElementById("apellido2").value == ""){
            document.getElementById("apellido2").style.background="#ffcaca" ;
            document.getElementById("apellido2").style.borderColor="red" ; i++; }
            else{
                document.getElementById("apellido2").style.background="white" ;
            document.getElementById("apellido2").style.borderColor="#00000000"  ;
            }

          if(document.getElementById("dni2").value == ""){
                          document.getElementById("dni2").style.background="#ffcaca" ;
                             document.getElementById("dni2").style.borderColor="red" ; i++; }
                             else{
                                document.getElementById("dni2").style.background="white" ;
                            document.getElementById("dni2").style.borderColor="#00000000"  ;
                            }

           if(document.getElementById("domicilio2").value == ""){
                               document.getElementById("domicilio2").style.background="#ffcaca" ;
                                document.getElementById("domicilio2").style.borderColor="red" ; i++; }
                                else{
                                    document.getElementById("domicilio2").style.background="white" ;
                                document.getElementById("domicilio2").style.borderColor="#00000000"  ;
                                }

              if(document.getElementById("telefono2").value == ""){
                                   document.getElementById("telefono2").style.background="#ffcaca" ;
                                    document.getElementById("telefono2").style.borderColor="red" ; i++; }
                                    else{
                                        document.getElementById("telefono2").style.background="white" ;
                                    document.getElementById("telefono2").style.borderColor="#00000000"  ;
                                    }



    if(document.getElementById("ContBic").style.display =='block')
    {

    }
                                
    if(i==0)
    {   
        eleccion();
    }

}