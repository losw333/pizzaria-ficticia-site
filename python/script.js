
// Botão do banner leva até o cardápio

const botao = document.querySelector("button");

botao.addEventListener("click", function(){

    document.querySelector("#cardapio")
    .scrollIntoView({
        behavior:"smooth"
    });

});




// Animação dos elementos quando aparecem na tela

const elementos = document.querySelectorAll(
".pizza-card, .promos div, .cliente"
);


const observador = new IntersectionObserver(
(entries)=>{

entries.forEach((entrada)=>{

    if(entrada.isIntersecting){

        entrada.target.style.opacity="1";
        entrada.target.style.transform="translateY(0)";

    }

});


},
{
    threshold:0.2
});



elementos.forEach((elemento)=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(40px)";
    elemento.style.transition="0.8s";

    observador.observe(elemento);

});





// Efeito de mudar o título da página quando o usuário sai

document.addEventListener(
"visibilitychange",
()=>{

    if(document.hidden){

        document.title="Volte para a Pizzaria 🍕";

    }
    else{

        document.title="Pizzaria Fictícia";

    }

});