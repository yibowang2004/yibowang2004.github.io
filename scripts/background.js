// 增加每次生成的方块数量
const batchSize = 5; // 每次生成方块个数
const interval = 500; // 生成间隔（毫秒）

function createSquare() {
    for(let i = 0; i < batchSize; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        
        const size = Math.floor(Math.random() * 3) + 1;
        const left = Math.random() * 99;
        const duration = Math.random() * 3 + 10;
        const delay = Math.random() * -5;

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${left}%`;
        square.style.animation = `floatUp ${duration}s linear ${delay}s forwards`;

        document.querySelector('.background').appendChild(square);

        square.addEventListener('animationend', () => {
            square.remove();
        });
    }
}

// 调整生成频率
setInterval(createSquare, interval);

// 初始填充
for(let i = 0; i < 5; i++) createSquare();