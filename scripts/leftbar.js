const more = document.querySelector('.header .more');
const wrapper = document.querySelector('.wrapper');
const leftbar = document.querySelector('.leftbar');
const container = document.querySelector('.container');
const clickbar = document.querySelector('.clickbar');
const threshold = 1400;
more.addEventListener('click', function () {
    leftbar.style.display = leftbar.style.display === 'block' ? 'none' : 'block';
    if(window.innerWidth > threshold) {
        container.style.left = container.style.left === '60%' ? '50%' : '60%';
        container.style.width = container.style.width === '65%' ? '90%' : '65%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '320px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
});

window.onresize = function () {
    let viewportWidth = window.innerWidth;
    if(viewportWidth > threshold) {
        wrapper.style.width = '80%';
        // leftbar.style.display = 'block';
        leftbar.dataset.w = viewportWidth;
        // container.style.left = '62.5%';
        // container.style.width = '65%';
    }
    if(viewportWidth <= threshold && leftbar.dataset.w > threshold) {
        wrapper.style.width = '100%';
        leftbar.style.display = 'none';
        leftbar.dataset.w = viewportWidth;
        // container.style.left = '50%';
        // container.style.width = '90%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '320px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
}

window.onload = function() {
    let viewportWidth = window.innerWidth;
    if(viewportWidth > threshold) {
        wrapper.style.width = '80%';
        // leftbar.style.display = 'block';
        leftbar.dataset.w = viewportWidth;
        // container.style.left = '62.5%';
        // container.style.width = '65%';
    }
    if(viewportWidth <= threshold) {
        wrapper.style.width = '100%';
        leftbar.style.display = 'none';
        leftbar.dataset.w = viewportWidth;
        // container.style.left = '50%';
        // container.style.width = '90%';
    }
    if(window.innerWidth >= 515) {
        leftbar.style.width = '320px';
    }
    if(window.innerWidth < 515) {
        leftbar.style.width = '70%';
    }
};