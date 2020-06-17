<?php
	$destino = "halo-hola@hotmail.com";
	
	$mensaje = $_POST["meNombreVendedornsaje"];
	
	$contenido ="Mensaje: " . $mensaje . descargapdfmueble();
	mail($destino,"Formulario",$contenido);
	header("Location:../Principal.html");
	?>

