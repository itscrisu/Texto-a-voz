
/*
    Le creo una función porque quiero que diga todo lo que vaya poniendo en 
    el input del texto, no solamente para un caso "decir"
*/

document.getElementById('voz').addEventListener("click", () => {
    decir(document.getElementById('texto').value);
});

const decir = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return texto
}