const bMenu = document.querySelector('.burger__menu');
const constMenu = document.querySelector('.contecst__menu');
const overlayMenu = document.querySelector('.overlay__menu');

const docEl = document.documentElement;
let startTime;
const durationMove = 2500;
let move;

overlayMenu.style.classList = `left: -${constMenu.scrollWidth}px`;
constMenu.style.cssText = `left: -${constMenu.scrollWidth}px`;

window.addEventListener('resize', () => {constMenu.style.cssText = `left: -${constMenu.scrollWidth}px`;})

bMenu.addEventListener('click', () =>{
    constMenu.classList.toggle('open');
    if(constMenu.classList.contains('open')){
      overlayMenu.style.cssText = `width: 100%`;
    }
    else
      overlayMenu.style.cssText = `width: 0px`;
      startTime = NaN;
      requestAnimationFrame(menuMove);
});

const menuMove = (timestamp) => {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / durationMove;
    move = constMenu.scrollWidth * progress;

        if(constMenu.classList.contains('open')){
            move = constMenu.scrollWidth * progress;
            if(progress < 1) {
                constMenu.style.transform = `translateX(${move}px)`;
                requestAnimationFrame(menuMove);
            }
        } else {

            move = constMenu.scrollWidth * (1 - progress);
            if(progress < 1) {
                constMenu.style.transform = `translateX(${move}px)`;
                requestAnimationFrame(menuMove);
            }

    }
}

overlayMenu.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.contecst__menu-item') || target === overlayMenu){
        startTime = NaN;
        constMenu.classList.remove('open');
        overlayMenu.style.cssText = `width: 0px`;
        requestAnimationFrame(menuMove);
    }
});
