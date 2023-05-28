import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) =>
        
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
); 
container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onGalleryGardClick);
function onGalleryGardClick(evt) {
   
    const isPictureImageEl = evt.target.classList.contains('gallery__image');
    evt.preventDefault();
    if (!isPictureImageEl) {
        
        return;

    }
   
    const imageEl = evt.target;
    const isPictureSrs = imageEl.dataset.source;
    const isPictureAlt = imageEl.alt;
    const parentImageCard = imageEl.closest('li');
   
        
    const instance = basicLightbox.create(
     `<img src="${isPictureSrs}" alt="${isPictureAlt}" width="800" height="600">`
    );

    instance.show()

    window.addEventListener('keydown', onEsckeyPress);

    function onEsckeyPress(evt) {
    if (evt.code=== 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEsckeyPress);  
    }
    }
    }


     
    





