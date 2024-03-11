let firstMenu = document.querySelector('.first-menu');
let menu = document.querySelector('.menu');
if (firstMenu && menu) {
    firstMenu.onclick = function () {
        menu.classList.toggle('active');
    };
}

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
if (content && darkMode) {
    darkMode.addEventListener('click', function () {
        darkMode.classList.toggle('active');
        content.classList.toggle('night');
    });
}
