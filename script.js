const text = document.getElementById('text');
const city = document.getElementById('picture-1');
const cloud1 = document.getElementById('picture-2');
const cloud2 = document.getElementById('picture-3');
const ironman = document.getElementById('ironman07');
const jet = document.getElementById('picture-11');
const moon = document.getElementById('picture-12');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (text) {
        text.style.top = scrollY * 0.5 + 'px';
        text.style.opacity = 1 - scrollY / 700;
    }
    if (city) city.style.top = scrollY * 0.5 + 'px';
    if (cloud1) cloud1.style.left = scrollY * -0.5 + 'px';
    if (cloud2) cloud2.style.right = scrollY * -0.5 + 'px';
    if (moon) moon.style.top = scrollY * 0.3 + 'px';

    if (jet) {
        jet.style.transform = `scale(${Math.min(scrollY / 500, 1)})`;
    }
    if (ironman) {
        const scale = Math.min(scrollY / 0.10, 1);
        ironman.style.top = (110 - scrollY * 0.05) + '%';
        ironman.style.transform = `scale(${Math.max(scrollY / 1000, 3)})`
        /*`translateX(-50%) scale(${scale})`*/;

    }
});