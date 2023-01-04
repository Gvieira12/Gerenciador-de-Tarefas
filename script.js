var $inputLi = document.getElementById('inputLi');
var $btn = document.getElementById('btn');
var $ul = document.getElementById('ul');
var $lis = document.querySelectorAll('li');

$inputLi.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addItem();
    }
})
$btn.addEventListener('click', addItem);

$ul.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') {
        removeTask(e.target);
    }
})

function removeTask(li) {
    if (confirm('Deseja realmente excluir a tarefa:' + ' ' + li.textContent + '?')) {
        li.parentNode.removeChild(li);
    }
}

//escrever no HTML atualizado
function addItem() {
    var li = document.createElement('li');
    var text = document.createTextNode($inputLi.value);

    li.appendChild(text);
    ul.appendChild(li);

    $inputLi.value = '';
    $inputLi.focus();
}