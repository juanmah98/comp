
function descargapdfelect(){
    
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

    var mar=mod=color=nserie=estado=accesorio=" ";

    mar=document.getElementById("marca").value;
    mod=document.getElementById("modelo").value;
    color=document.getElementById("color").value;
    nserie=document.getElementById("n_serie").value;
    estado=document.getElementById("estado").value;
    accesorio=document.getElementById("accesorio").value;
    
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
    
    pdf.text(40,245," TIPO DE ARTICULO SELECCIONADO: ELECTRONICO" );
    pdf.text(40,265," DETALLES DEL ARTICULO:" );

    pdf.setFontSize(13);
    pdf.setFont("calibri", "regular");
    pdf.text(50,285," Marca: " + mar );
    pdf.text(50,300," Modelo: " + mod );
    pdf.text(50,315," Color: " + color );
    pdf.text(50,330," Nº de Serie: " + nserie );
    pdf.text(50,345," Estado: " + estado );
    if(document.getElementById("SI").checked!=false)
    {
        pdf.text(50,360," Accesorio: " + accesorio );

    }else pdf.text(50,360," Accesorio: NO "  );

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
        pdf.text(40,405," INFORMACION: " +  trueque );
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