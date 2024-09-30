import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');
const listItems = galleryEl.querySelectorAll('li');

searchForm.addEventListener('submit', submitSearch);

function submitSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();
  if (!query) {
    return;
  }

  listItems.forEach(item => item.remove());

  loader.classList.add('isVisible');

  fetchImages(query)
    .then(images => {
      renderImages(images);
      gallery.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching images. Please try again later.',
      });
    })
    .finally(() => {
      loader.classList.remove('isVisible');
      searchForm.reset();
    });
}
