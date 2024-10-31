$(document).ready(function () {
  $(".select-btn").click(function () {
    // Alternar la clase 'selected' en el contenedor de la imagen
    $(this).parent(".image-container").toggleClass("selected");

    // Cambiar el texto del botón
    if ($(this).text() === "Escoger") {
      $(this).text("Escogido");
    } else {
      $(this).text("Escoger");
    }
  });

  // Abrir el modal y mostrar la imagen completa al hacer clic en "Ver"
  $(".view-btn").click(function (e) {
    e.stopPropagation(); // Evita que se active el modal al hacer clic en el botón
    const imgSrc = $(this).closest(".image-container").find("img").attr("src");
    $("#modalImage").attr("src", imgSrc);
    $("#imageModal").css("display", "block");
  });

  // Cerrar el modal
  $(".close").click(function () {
    $("#imageModal").css("display", "none");
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  $(window).click(function (event) {
    if (event.target === $("#imageModal")[0]) {
      $("#imageModal").css("display", "none");
    }
  });
});
