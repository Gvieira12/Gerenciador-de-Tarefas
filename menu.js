var $btn = document.querySelector('.btn');
var $menu = document.querySelector('.menu');
var $btn2 = document.querySelector('.btn2');
var $btnImg = document.querySelector('.btnImg');

$btn.addEventListener('click', function() {
    $menu.classList.remove('menu');
    $menu.classList.add('left-menu');
});
$btn2.addEventListener('click', function() {
    $menu.classList.remove('left-menu');
    $menu.classList.add('menu');
});
$btnImg.addEventListener('click', function() {
    $menu.classList.remove('menu');
    $menu.classList.add('left-menu');
});
