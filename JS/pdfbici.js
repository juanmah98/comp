
function descargapdfbici(){
    
    var pdf= new jsPDF('p','pt','a4');
    pdf.setFont("calibri", "bold");
    
    
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date();
    

    var nom=ape=dom=num=dni=" ";
    
        nom=document.getElementById("NombreVendedor").value;
        ape=document.getElementById("ApellidoVendedor").value;
        dni=document.getElementById("dni").value;
        dom=document.getElementById("DomicilioVendedor").value;
        num = document.getElementById("TelefonoVendedor").value;
    
    

    var nom2=ape2=dom2=num2=dni2=" ";
    
        nom2=document.getElementById("nombre2").value;
        ape2=document.getElementById("apellido2").value;
        dni2=document.getElementById("dni2").value;
        dom2=document.getElementById("domicilio2").value  ;
        num2 = document.getElementById("telefono2").value;

    var tipo,marca,modelo,color,extras,cuadro,tallecuadro,tallecubierta,material,cambio,frenos,horquilla=" ";

    tipo=document.getElementById("tipo2").value;
    marca=document.getElementById("marca2").value;
    modelo=document.getElementById("modelo2").value;
    color=document.getElementById("color2").value;
    extras=document.getElementById("extras2").value;
    cuadro=document.getElementById("cuadro2").value;
    tallecuadro=document.getElementById("Tallecuadro2").value;
    tallecubierta=document.getElementById("Tallecubierta2").value;
    material=document.getElementById("material2").value;
    cambio=document.getElementById("cambio2").value;
    frenos=document.getElementById("frenos2").value;
    horquilla=document.getElementById("Horquilla2").value;
    
   var efectivo=trueque=" ";
   efectivo=document.getElementById("bxVenta").value;
   trueque=document.getElementById("bxCanje").value;
   trueque2=document.getElementById("bxCanjee").value;

    pdf.setFontSize(15);
    pdf.text(30,30," COMPROBANTE DE COMPRA-VENTA" );
    pdf.text(400,40, f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear())

    pdf.setFontSize(16);    
    pdf.text(40,60,"COMO VENDEDOR")
    pdf.setFontSize(13);
    pdf.setFont("calibri", "regular");
    pdf.text(50,80," Nombre y Apellido: " +  ape +" "+ nom);
    pdf.text(50,95," Dni Nº: " + dni);
    pdf.text(50,110," Domicilio: " + dom);
    pdf.text(50,125," Celular N°: " + num );

  
    pdf.setFont("calibri", "bold");
    pdf.setFontSize(16);
    pdf.text(40,145,"COMO COMPRADOR ") ;
    pdf.setFontSize(13);
    pdf.setFont("calibri", "regular");
    pdf.text(50,160," Nombre y Apellido: "+ ape2 +" "+ nom2);
    pdf.text(50,175," Dni Nº: " + dni2);
    pdf.text(50,190," Domicilio: " + dom2);
    pdf.text(50,205," Celular N°: " + num2 );
    pdf.setFont("calibri", "bold");
    pdf.text(40,220," -------------------------------------- ");

    pdf.setFontSize(15);
    
    pdf.text(40,245," TIPO DE ARTICULO SELECCIONADO: Bicicleta" );
    pdf.text(40,265," DETALLES DEL ARTICULO:" );

    pdf.setFontSize(13);
    pdf.setFont("calibri", "regular");
    pdf.text(50,285," Tipo: " + tipo );
    pdf.text(50,300," Marca: " + marca );
    pdf.text(50,315," Modelo: " + modelo );
    pdf.text(50,330," Color: " + color );
    pdf.text(50,345," Extras: " + extras );
    pdf.text(50,360," Cuadro: " + cuadro );

    pdf.text(335,285," Talle Cuadro: " + tallecuadro );
    pdf.text(335,300," Talle Cubiertas: " + tallecubierta );
    pdf.text(335,315," Material: " + material );
    pdf.text(335,330," Cambios: " + cambio );
    pdf.text(335,345," Frenos: " + frenos );
    pdf.text(335,360," Horquilla: " + horquilla );

   

    pdf.setFont("calibri", "bold");
    if(document.getElementById("rbVenta").checked!=false)
    {
        pdf.setFontSize(16);
         pdf.text(40,385," FORMA DE PAGO: EFECTIVO " );
         pdf.setFontSize(13);
        pdf.text(40,405," MONTO: " + "$"+ efectivo );

    }else {
        pdf.setFontSize(14);
        pdf.text(40,385," FORMA DE PAGO: PERMUTA " );
        pdf.setFontSize(14);
        pdf.text(40,405," INFORMACION: " +  trueque );//eliminar truqeure y resubir a git hub
        pdf.setFontSize(13);
        pdf.setFont("calibri", "regular");
        pdf.text(40,420, trueque );
        pdf.text(40,435, trueque2 );

    }
    pdf.setFont("calibri", "regular");
    pdf.text(95,498, ape + " "+ nom);
    pdf.setFont("calibri", "bold");
    pdf.text(80, 500,"_______________________");
    pdf.text(95,515, "Firma del Comprador");

    pdf.setFont("calibri", "regular");
    pdf.text(335,498, ape2 + " "+ nom2);
    pdf.setFont("calibri", "bold");
    pdf.text(320, 500,"_______________________");
    pdf.text(335,515, "Firma del Vendedor");


  

    pdf.save('Comprobante Compra-Venta.pdf')
}
