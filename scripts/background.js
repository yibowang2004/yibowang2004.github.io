// 配置参数
const batchSize = 5; // 每次生成5个方块
const interval = 1000; // 生成间隔（毫秒）
const maxSquares = window.innerWidth > 1400 ? 150 : 50;
let currentSquares = 0; // 当前方块数量

function createSquare() {
    // 如果当前方块数量已达上限，则停止生成
    if(currentSquares >= maxSquares) return;

    for(let i = 0; i < batchSize; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        
        const size = Math.floor(Math.random() * 3) + 1;
        const left = Math.random() * 99;
        const duration = Math.random() * 3 + 20;
        const delay = Math.random() * -5;

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${left}%`;
        square.style.animation = `floatUp ${duration}s linear ${delay}s forwards`;

        document.querySelector('.background').appendChild(square);
        currentSquares++;

        square.addEventListener('animationend', () => {
            square.remove();
            currentSquares--;
        });
    }
}

// 调整生成频率
setInterval(createSquare, interval);

// 初始填充
for(let i = 0; i < 5; i++) createSquare();