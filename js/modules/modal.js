const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal__win');
const callBtn = document.querySelector('.btn__call');

callBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', (e) => {
    const target = e.target;
    
    if(target === overlay || target.closest('.modal__close')) {
        modal.classList.toggle('active');
        overlay.classList.toggle('active');
    }
});