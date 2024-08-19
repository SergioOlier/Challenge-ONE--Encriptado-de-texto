const textarea = document.getElementById("textarea");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesenciptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const mensajeInfo = document.getElementById("mensajeInfo")
const imgMuñeco = document.getElementById("imgMuñeco")
const derecha = document.getElementById("derecha")

let encriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const reemplazar = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;
    textarea.value=""
    mensajeInfo.style.display = "none"
    botonCopiar.style.display = "block"
    mensajeFinal.classList.add("ajustar")
    derecha.classList.add("ajustar")
    imgMuñeco.classList.add("oculto")
}

const reset=()=>{
    mensajeFinal.innerHTML = "";
    mensajeInfo.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    imgMuñeco.classList.remove("oculto")
    textarea.focus();
}

botonEncriptar.addEventListener("click", () => {
    const textoOriginal = textarea.value;

    // Expresión regular para permitir solo letras minúsculas sin acentos y sin caracteres especiales
    const regex = /^[a-z\s]+$/;

    if (textoOriginal === "") {
        Swal.fire({
            title: "¡Error!",
            text: "Por favor, ingrese un texto a encriptar",
            icon: "error",
            confirmButtonColor: '#982B1C',
            confirmButtonText: 'Cerrar',
            timer: 3000,
            timerProgressBar: true,
            background: "#DAD4B5",
            iconColor: "#800000",
        });
    } else if (!regex.test(textoOriginal)) {
        Swal.fire({
            title: "¡Advertencia!",
            text: "El texto contiene letras mayúsculas, acentos o caracteres especiales.",
            icon: "warning",
            confirmButtonColor: '#982B1C',
            confirmButtonText: 'Cerrar',
            timer: 3000,
            timerProgressBar: true,
            background: "#DAD4B5",
            iconColor: "#800000",
        });
    } else {
        const texto = textoOriginal.toLowerCase();
        
        function encriptar(newText) {
            for (let i = 0; i < encriptado.length; i++) {
                if (newText.includes(encriptado[i][0])) {
                    newText = newText.replaceAll(encriptado[i][0], encriptado[i][1]);
                }
            }
            return newText;
        }
        const textoEncriptado = encriptar(texto);
        reemplazar(textoEncriptado);
        mensajeFinal.innerHTML = textoEncriptado;
    }
});


botonDesenciptar.addEventListener("click", () => {
    const textoOriginal = textarea.value;

    // Expresión regular para permitir solo letras minúsculas sin acentos y sin caracteres especiales
    const regex = /^[a-z\s]+$/;

    if (textoOriginal === "") {
        Swal.fire({
            title: "¡Error!",
            text: "Por favor, ingrese un texto a desencriptar",
            icon: "error",
            confirmButtonColor: '#982B1C',
            confirmButtonText: 'Cerrar',
            timer: 3000,
            timerProgressBar: true,
            background: "#DAD4B5",
            iconColor: "#800000",
        });
    } else if (!regex.test(textoOriginal)) {
        Swal.fire({
            title: "¡Advertencia!",
            text: "El texto contiene letras mayúsculas, acentos o caracteres especiales.",
            icon: "warning",
            confirmButtonColor: '#982B1C',
            confirmButtonText: 'Cerrar',
            timer: 3000,
            timerProgressBar: true,
            background: "#DAD4B5",
            iconColor: "#800000",
        });
        reset();
    } else {
        const texto = textoOriginal.toLowerCase();

        function desencriptar(newText) {
            for (let i = 0; i < encriptado.length; i++) {
                if (newText.includes(encriptado[i][1])) {
                    newText = newText.replaceAll(encriptado[i][1], encriptado[i][0]);
                }
            }
            return newText;
        }
        const textoDesencriptado = desencriptar(texto);
        reemplazar(textoDesencriptado);
        mensajeFinal.innerHTML = textoDesencriptado;
    }
});


botonCopiar.addEventListener("click", ()=>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy")
    Swal.fire({
        title: "Copiado",
        text: "Su texto ha sido copiado con exito",
        icon: "success",
        confirmButtonColor: '#982B1C',
        timer: 3000,
        timerProgressBar: true,
        background: "#DAD4B5",
        iconColor: "#00712D",
    })
    reset();
});