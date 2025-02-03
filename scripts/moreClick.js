const more = document.querySelector('.header .more');
const leftbar = document.querySelector('.leftbar');
const container = document.querySelector('.container');
const threshold = 1400;
more.addEventListener('click', function () {
    leftbar.style.display = leftbar.style.display === 'none' ? 'block' : 'none';
    if(window.innerWidth > threshold) {
        container.style.left = container.style.left === '50%' ? '57.5%' : '50%';
        container.style.width = container.style.width === '90%' ? '60%' : '90%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '360px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
});

window.onresize = function () {
    let viewportWidth = window.innerWidth;
    if(viewportWidth > threshold) {
        leftbar.style.display = 'block';
        leftbar.dataset.w = viewportWidth;
        container.style.left = '57.5%';
        container.style.width = '60%';
    }
    if(viewportWidth <= threshold && leftbar.dataset.w > threshold) {
        leftbar.style.display = 'none';
        leftbar.dataset.w = viewportWidth;
        container.style.left = '50%';
        container.style.width = '90%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '360px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
}

window.onload = function() {
    let viewportWidth = window.innerWidth;
    if(viewportWidth > threshold) {
        leftbar.style.display = 'block';
        leftbar.dataset.w = viewportWidth;
        container.style.left = '57.5%';
        container.style.width = '60%';
    }
    if(viewportWidth <= threshold) {
        leftbar.style.display = 'none';
        leftbar.dataset.w = viewportWidth;
        container.style.left = '50%';
        container.style.width = '90%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '360px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
};