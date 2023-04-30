function encriptar() {
  let texto = document.getElementById("texto").value;
  let textoEncriptado = texto.replaceAll("e", "enter")
                            .replaceAll("i", "imes")
                            .replaceAll("a", "ai")
                            .replaceAll("o", "ober")
                            .replaceAll("u", "ufat");
  document.getElementById("mensaje").innerHTML = textoEncriptado;
}

function desencriptar() {
  let textoEncriptado = document.getElementById("texto").value;
  let texto = textoEncriptado.replaceAll("enter", "e")
                            .replaceAll("imes", "i")
                            .replaceAll("ai", "a")
                            .replaceAll("ober", "o")
                            .replaceAll("ufat", "u");
  document.getElementById("mensaje").innerHTML = texto;
}

/*función para copiar el texto*/
function copiar() {
    const resultado = document.querySelector("#mensaje").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = resultado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  /* función para eliminar tildes*/
  const textarea = document.querySelector("#texto");

textarea.addEventListener("input", () => {
  textarea.value = quitarAcentos(textarea.value);
});

  function quitarAcentos(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  
