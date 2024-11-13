// Función para calcular el MCD de múltiples números
function calcularMCDMultiple(numeros) {
  return numeros.reduce((a, b) => calcularMCD(a, b));
}

// Función para calcular el MCM de múltiples números
function calcularMCMMultiple(numeros) {
  return numeros.reduce((a, b) => calcularMCM(a, b));
}

// Función para calcular el MCD usando el algoritmo de Euclides
function calcularMCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Función para calcular el MCM
function calcularMCM(a, b) {
  return (a * b) / calcularMCD(a, b);
}

// Función para mostrar explicación detallada de MCD y MCM
function mostrarExplicacion(mcd, mcm, numeros) {
  let explicacion = `<p><strong>Números ingresados:</strong> ${numeros.join(
    ", "
  )}</p>`;
  explicacion += `<p><strong>MCD:</strong> Calculado usando el algoritmo de Euclides paso a paso para todos los números.</p>`;
  explicacion += `<p><strong>MCM:</strong> Calculado usando la fórmula MCM = (a * b) / MCD para todos los números.</p>`;
  explicacion += `<p><strong>Resultado del MCD:</strong> ${mcd}</p>`;
  explicacion += `<p><strong>Resultado del MCM:</strong> ${mcm}</p>`;
  $("#explicacion").html(explicacion);
}

// Función para calcular la Regla de Tres Simple
function calcularReglaDeTres(a, b, c, desconocido) {
  if (desconocido === "X") {
    return (b * c) / a; // Si X es el desconocido
  } else if (desconocido === "A") {
    return (a * c) / b; // Si A es el desconocido
  } else if (desconocido === "B") {
    return (a * b) / c; // Si B es el desconocido
  }
}

// Mostrar explicación de la regla de tres simple
function mostrarExplicacionRegla(a, b, c, desconocido, resultado) {
  let explicacion = `<p>Estamos resolviendo una regla de tres simple. La fórmula es:</p>`;
  explicacion += `<p><strong>Si X es desconocido:</strong> X = (B * C) / A</p>`;
  explicacion += `<p><strong>Si A es desconocido:</strong> A = (B * C) / X</p>`;
  explicacion += `<p><strong>Si B es desconocido:</strong> B = (A * C) / X</p>`;

  explicacion += `<p>Valores usados:</p>`;
  explicacion += `<p><strong>A:</strong> ${a}</p>`;
  explicacion += `<p><strong>B:</strong> ${b}</p>`;
  explicacion += `<p><strong>C:</strong> ${c}</p>`;
  explicacion += `<p><strong>Desconocido:</strong> ${desconocido}</p>`;
  explicacion += `<p><strong>Resultado:</strong> El valor de ${desconocido} es ${resultado}</p>`;

  $("#explicacionRegla").html(explicacion);
}

$(document).ready(function () {
  // Sección de MCD y MCM
  $("#addNumber").click(function () {
    $("#inputContainer").append(
      '<input type="number" class="number-input" placeholder="Número adicional">'
    );
  });

  $("#calcularMCDMCM").click(function () {
    let numeros = [];
    $(".number-input").each(function () {
      let num = parseInt($(this).val());
      if (!isNaN(num)) {
        numeros.push(num);
      }
    });

    if (numeros.length > 1) {
      // Calcular y mostrar el MCD y MCM de los números ingresados
      let mcd = calcularMCDMultiple(numeros);
      let mcm = calcularMCMMultiple(numeros);

      $("#resultadoMCD").text(mcd);
      $("#resultadoMCM").text(mcm);
      mostrarExplicacion(mcd, mcm, numeros);
    } else {
      alert("Por favor, ingresa al menos dos números válidos.");
    }
  });

  $(document).ready(function () {
    $("#formReglaTres").submit(function (e) {
      e.preventDefault();

      // Obtener los valores ingresados
      let valorA = parseFloat($("#valorA").val());
      let valorB = parseFloat($("#valorB").val());
      let valorC = parseFloat($("#valorC").val());
      let valorDesconocido = $("#valorDesconocido").val();

      let resultado;
      let explicacion;

      // Verificar que el valor desconocido sea "X" y resolver la regla de tres correctamente
      if (valorDesconocido === "X") {
        resultado = (valorB * valorC) / valorA; // Fórmula correcta: X = (B * C) / A
        explicacion = `
        Estamos resolviendo una regla de tres simple. La fórmula es:
        <br><strong>X = (B * C) / A</strong>
        <br><strong>Valores usados:</strong> A: ${valorA}, B: ${valorB}, C: ${valorC}, Desconocido: X
        <br><strong>Resultado:</strong> El valor de X es ${resultado}
      `;
      } else if (valorDesconocido === "A") {
        resultado = (valorB * valorC) / valorX;
        explicacion = `
        Estamos resolviendo una regla de tres simple. La fórmula es:
        <br><strong>A = (B * C) / X</strong>
        <br><strong>Valores usados:</strong> A: ${valorA}, B: ${valorB}, C: ${valorC}, Desconocido: A
        <br><strong>Resultado:</strong> El valor de A es ${resultado}
      `;
      }

      // Mostrar el resultado y la explicación
      $("#resultadoValor").text(resultado);
      $("#explicacionRegla").html(explicacion);
    });
  });
});
