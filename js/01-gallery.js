import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onShow);

gallery.insertAdjacentHTML('afterbegin', makeGallery(galleryItems));

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${preview}" data-source="${original}"    alt="${description}"/></a></div>`;
    })
    .join('');
}

function onShow(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imgLink = event.target.dataset.source;
  setModal(imgLink);
}

function setModal(imgLink) {
  const instance = basicLightbox.create(`
    <img src="${imgLink}">
    `);
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code !== 'Escape') {
      return;
    }

    instance.close();

    document.removeEventListener('keydown', event);
  });
}
