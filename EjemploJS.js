$("#boton-usuarios").on("click", obtenerUsuarios);

function obtenerUsuarios() {
  $.ajax({
    url: "https://localhost:44350/weatherforecast",
    success: function(respuesta) {
        console.log('Success', respuesta)
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}