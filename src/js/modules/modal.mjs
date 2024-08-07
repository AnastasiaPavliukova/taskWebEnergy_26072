const modalcloseBtn = document.querySelector('.modal__close-btn');
const modalBg = document.querySelector('.modal__overlay');
let modalActive;

function closeActiveModal() {
    if (modalActive) {
        modalActive.style.display = 'none';
    }
}

export function showModal(modalId) {
    closeActiveModal();
    const modalToOpen = document.getElementById(modalId);
    if (!modalToOpen) {
        console.error('wrong modal id');
        return;
    }
    modalToOpen.style.display = 'flex';
    modalActive = modalToOpen;
}

modalcloseBtn.addEventListener('click', closeActiveModal);
modalBg.addEventListener('click', closeActiveModal);