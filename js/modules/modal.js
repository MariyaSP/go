const modal = document.querySelector('.overlay');
const overlay = document.querySelector('.overlay__modal');
const callBtn = document.querySelector('.btn__call');

callBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
});

modal.addEventListener('click', (e) => {
    const target = e.target;
    console.log('target: ', target);

    if(target === overlay || target.closest('.modal__close')) {
        modal.classList.toggle('active');
        modal.classList.toggle('modal__display');
    }
});