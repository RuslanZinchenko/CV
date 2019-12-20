const modalSection = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const container = document.querySelector('.container');

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModal);
modalSection.addEventListener('click', closeModalAgain);

function closeModal(e) {
  if (e.key === 'Escape') {
    modalSection.classList.add('modal-hidden');
  }
}

function closeModalAgain(e) {
  if (e.target.classList.contains('modal')) {
    modalSection.classList.add('modal-hidden');
  }
}

function openModal(e) {
  const target = e.target;
  choosePicture(target);
  if (target.classList.contains('sidebar')) {
    return;
  } else {
    modalSection.classList.remove('modal-hidden');
  }
}
 
function choosePicture(target) {
  modalImg.innerHTML = target.outerHTML;
}