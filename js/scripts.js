const botaoSobre = document.querySelector("#botao-sobre");
const conteudoSobre = document.querySelector("#conteudo-sobre");

function alternarConteudoSobre() {
    
    const estaExpandido = botaoSobre.getAttribute("aria-expanded") === "true";

    botaoSobre.setAttribute("aria-expanded", String(!estaExpandido));

    conteudoSobre.hidden = estaExpandido;

    botaoSobre.textContent = estaExpandido ? "Saiba mais" : "Saiba menos";
}

if (botaoSobre && conteudoSobre) {
    botaoSobre.addEventListener("click", alternarConteudoSobre);
}
