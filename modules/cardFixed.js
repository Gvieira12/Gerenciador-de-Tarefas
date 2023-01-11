var valorTela = 0;
var card = document.querySelector('.card-perfil');


window.addEventListener('scroll', function () {
    if (pageYOffset > 2178) {
        card.style.position = 'sticky';
        card.style.top = '100px';
    } else {
        card.style.position = 'static';
    }

}); 
