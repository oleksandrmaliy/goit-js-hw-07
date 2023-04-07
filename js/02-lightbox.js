import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryCollection = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} alt=${description} /></a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryCollection);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: true,
});

// console.log(galleryItems);
