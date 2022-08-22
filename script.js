// Function () pour etre sur que ca charge avant html
(function () {
    var menu = document.querySelector(".burgerButton");
    menu.addEventListener('click', () => {
        var nav = document.querySelector('nav');
        nav.classList.toggle('hide');
    })
})();