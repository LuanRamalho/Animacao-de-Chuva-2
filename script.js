function createRainDrops() {
    const rain = document.querySelector('.rain');
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rain.appendChild(drop);
    }
}

document.addEventListener('DOMContentLoaded', createRainDrops);
