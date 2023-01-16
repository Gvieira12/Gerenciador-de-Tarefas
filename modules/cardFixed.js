var valorTela = 0;
var card = document.querySelector('.card-perfil');


window.addEventListener('scroll', function () {
    var altura = window.screen.height;
    var largura = window.screen.width;
    console.log(altura)
    console.log(largura)
    if (altura > 320 && largura > 913) {
        if (pageYOffset > 2178) {
            card.style.position = 'sticky';
            card.style.top = '100px';
        } else {
            card.style.position = 'static';
        }
    } else {
        card.style.position = 'static';
    }


}); 
