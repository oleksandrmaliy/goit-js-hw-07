import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const makeGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="galerry__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);
gallery.addEventListener('click', onOpenModal);

let instance;

function onOpenModal(event) {
  event.preventDefault();

  const currentItem = event.target;

  if (currentItem.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(
    `<img class="gallery__image" src="${currentItem.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', closeByKey);
      },
      onClose: () => {
        window.removeEventListener('keydown', closeByKey);
      },
    }
  );

  instance.show();
}

function closeByKey(event) {
  if (event.code !== 'Escape') {
    return;
  }

  instance.close();
}
