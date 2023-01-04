var jmodal = document.querySelector(".janela_modal");
var jmodalBtn = document.querySelector(".janela_modal_fechar");
var jmodalImg = document.querySelector(".janela_img");
var $nav = document.querySelector(".left-menu");

function abrirJ(img) {
    $nav.style.display = 'none';
    jmodal.style.display = 'block';
    console.log(img)
    jmodalImg.src = img
    jmodalBtn.onclick=function() {
        jmodal.style.display = 'none';
    } 


}