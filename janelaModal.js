var jmodal = document.querySelector(".janela_modal");
var jmodalBtn = document.querySelector(".janela_modal_fechar");
var jmodalImg = document.querySelector(".janela_img");
var $nav = document.querySelector(".left-menu");
//dentro do parametro img vou passar o src da imagem
function abrirJ(img) {
    $nav.style.display = 'none';
    jmodal.style.display = 'block';
    console.log(img)
    //aqui adiciona o src para que possa imprimir na tela a imagem
    jmodalImg.src = img
    //função quando clicar para fechar a div
    jmodalBtn.onclick = function () {
        jmodal.style.display = 'none';
        $nav.style.display = 'flex';
    }


}