const bMenu = document.querySelector('.burger__menu');
const constMenu = document.querySelector('.contecst__menu');
const docEl = document.documentElement;
let startTime;
const durationMove = 1500;
let move;

constMenu.style.cssText = `left: -${constMenu.scrollWidth}px`
window.addEventListener('resize', () => {constMenu.style.cssText = `left: -${constMenu.scrollWidth}px`;})

bMenu.addEventListener('click', () =>{
    constMenu.classList.toggle('open');
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
                constMenu.style.transform = `translateX(${move }px)`;
                requestAnimationFrame(menuMove);
            }
    }  

}

