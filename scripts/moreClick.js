const more = document.querySelector('.header .more');
const leftbar = document.querySelector('.leftbar');
const container = document.querySelector('.container');
more.addEventListener('click', function () {
    leftbar.style.display = leftbar.style.display === 'none' ? 'block' : 'none';
    if(window.innerWidth > 1400) {
        container.style.left = container.style.left === '50%' ? '57.5%' : '50%';
        container.style.width = container.style.width === '80%' ? '60%' : '80%';
    }
});

window.onresize = function () {
    let viewportWidth = window.innerWidth;
    if(viewportWidth >= 1400) {
        leftbar.style.display = 'block';
        container.style.left = '57.5%';
        container.style.width = '60%';
    }
    if(viewportWidth < 1400) {
        leftbar.style.display = 'none';
        container.style.left = '50%';
        container.style.width = '80%';
    }
}

window.onload = function() {
    let viewportWidth = window.innerWidth;
    if(viewportWidth >= 1400) {
        leftbar.style.display = 'block';
        container.style.left = '57.5%';
        container.style.width = '60%';
    }
    if(viewportWidth < 1400) {
        leftbar.style.display = 'none';
        container.style.left = '50%';
        container.style.width = '80%';
    }
};