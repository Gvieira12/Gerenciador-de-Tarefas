
//li.appendChild(text)
//ul.appendChild(li)
//criar função aqui com parâmetros de nome de imagem e depois outro arquivo apenas para chamá-las
export default function addImg(content, imgSrc) {

    var $div = document.querySelector(".img-carro");
    var classValue = 'img-carro3';

    var div = document.createElement('div');
    div.classList.add('img-carro2')
    $div.appendChild(div);
    var img = document.createElement('img');
    img.src = content;
    //função para onclick
    img.onclick = function() {
        $nav.style.display = 'none';
        jmodal.style.display = 'block';
        console.log(img)
        jmodalImg.src = imgSrc
        jmodalBtn.onclick = function () {
            jmodal.style.display = 'none';
            $nav.style.display = 'flex';
        }
    }
    img.classList.add(classValue);
    div.appendChild(img);
}

