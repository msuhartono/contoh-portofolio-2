const textElement = ['Freelancer', 'Web Developer', 'Designer'];
var count = 0;
var txtIndex = 0;
var currentTxt = '';
var words = '';

(function ngetik() {
    if (count === textElement.length) {
        count = 0;
    }
    currentTxt = textElement[count];

    words = currentTxt.slice(0, txtIndex++);

    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length === currentTxt.length) {
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 200);


})();

// DOM
const iconPutar = document.querySelector('#icon_putar');
const iconBiasa = document.querySelector('#icon_biasa');


iconBiasa.addEventListener('click', function () {
    iconPutar.setAttribute('class', 'fa fa-bars fa-rotate-90 fa-2x');
    iconBiasa.setAttribute('class', '');
});

iconPutar.addEventListener('click', function () {
    iconPutar.setAttribute('class', '');
    iconBiasa.setAttribute('class', 'fa fa-bars fa-2x');
});