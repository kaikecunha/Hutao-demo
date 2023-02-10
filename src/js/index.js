console.log('mostrar o document', document);

console.log(document.querySelector(".botao-demo"));

const botaoDemo = document.querySelector(".botao-demo");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoDemo.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src",linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});





