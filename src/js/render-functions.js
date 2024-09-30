import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item"> 
        <a href="${largeImageURL}" class="gallery-link">
  <img src="${webformatURL}" alt="${tags}" class="card-img"/>
  <ul class="desc-list">
    <li class="desc-item">
      <p class="desc-value">Likes</p>
      <p class="desc-quantity">${likes}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Views</p>
      <p class="desc-quantity">${views}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Comments</p>
      <p class="desc-quantity">${comments}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Downloads</p>
      <p class="desc-quantity">${downloads}</p>
    </li>
  </ul>
 </li>`
    )
    .join('');
  gallery.innerHTML = markup;
}
