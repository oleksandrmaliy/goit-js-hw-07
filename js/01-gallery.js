import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryCollection = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryCollection);

gallery.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  const currentItem = event.target;

  if (currentItem.nodeName !== 'IMG') {
    return;
  }

  const modalWindow = basicLightbox.create(`
   <img class="gallery__image" src="${currentItem.dataset.source}" width="800" height="600">
`);

  window.addEventListener('keydown', onCloseModal);

  modalWindow.show();
}

function onCloseModal(event) {
  const openModal = document.querySelector('.basicLightbox');

  if (event.code === 'Escape') {
    openModal.remove();
  }

  window.removeEventListener('keydown', onCloseModal);
}

// console.log(galleryItems);
