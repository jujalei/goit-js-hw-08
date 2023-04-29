// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import createGalleryItems from './gallery/create-gallery-f';
import { lightbox } from './gallery/option-for-library';

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

const galleryMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const gallery = new SimpleLightbox('.gallery a', lightbox);