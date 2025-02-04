// 动态计算参数
function getConfig() {
    const screenArea = window.innerWidth * window.innerHeight;
    const baseArea = 1920 * 1080; // 参考屏幕面积（1080p）

    // 根据屏幕面积比例调整参数
    const scale = screenArea / baseArea;

    const batchSize = Math.max(2, Math.min(20, Math.floor(10 * scale))); // 限制在 2-20 之间
    const maxSquares = Math.max(100, Math.min(1000, Math.floor(300 * scale))); // 限制在 100-1000 之间
    // 生成间隔（毫秒）
    const interval = 600;

    return { batchSize, maxSquares, interval };
}

// 初始化配置
let { batchSize, maxSquares, interval } = getConfig();
let currentSquares = 0; // 当前方块数量
let intervalId = null; // 定时器ID

function createSquare() {
    // 如果当前方块数量已达上限，则停止生成
    if(currentSquares >= maxSquares) return;

    for(let i = 0; i < batchSize; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        
        // 随机生成方块尺寸（1-3px）
        const size = Math.floor(Math.random() * 3) + 1;
        // 随机水平位置（0-99%）
        const left = Math.random() * 99;
        // 随机动画时长（3-6秒）
        const duration = Math.random() * 3 + 6;
        const swing = (Math.random() - 0.5) * 40; // -20px到20px

        square.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            --swing: ${swing}px;
            animation: floatUp ${duration}s linear forwards;
        `;

        document.querySelector('.background').appendChild(square);
        currentSquares++;

        square.addEventListener('animationend', () => {
            square.remove();
            currentSquares--;
        });
    }
}

// 启动方块生成
function startSquareGeneration() {
    if (!intervalId) {
        intervalId = setInterval(createSquare, interval);
    }
}

// 停止方块生成
function stopSquareGeneration() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// 初始填充
for(let i = 0; i < 1; i++) createSquare();
startSquareGeneration();

// 窗口大小变化时动态调整参数
window.addEventListener('resize', () => {
    const newConfig = getConfig();
    batchSize = newConfig.batchSize;
    maxSquares = newConfig.maxSquares;
});

// 监听页面可见性变化
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 页面不可见时停止生成
        stopSquareGeneration();
    } else {
        // 页面可见时恢复生成
        startSquareGeneration();
    }
});