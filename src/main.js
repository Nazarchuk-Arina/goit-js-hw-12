import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');
let lightbox = new SimpleLightbox('.gallery a');

let page = 1;
let searchQuery = '';

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.query.value.trim();
  page = 1;

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a search term.',
    });
    return;
  }

  gallery.innerHTML = '';
  loadMoreButton.classList.add('hidden');

  loader.classList.add('isVisible');
  await loadImages();
  loader.classList.remove('isVisible');
}

async function loadImages() {
  try {
    const data = await fetchImages(searchQuery, page);
    renderImages(data.hits);
    lightbox.refresh();
    toggleLoadMoreButton(data.hits.length);

    if (page * 15 >= data.totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreButton.classList.add('hidden');
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed loadig images.',
    });
  }
}

function toggleLoadMoreButton(resultsCount) {
  if (resultsCount < 15) {
    loadMoreButton.classList.add('hidden');
  } else {
    loadMoreButton.classList.remove('hidden');
  }
}

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  loader.classList.add('isVisible');
  await loadImages();
  loader.classList.remove('isVisible');
  scrollPage();
});

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
