import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
let htmlContent = '';

for (const item of galleryItems) {
    htmlContent += `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-src="${item.original}" alt="${item.description || 'Image description'}" />
        </a>
    </li> `;
}
console.log(htmlContent);
galleryContainer.insertAdjacentHTML('beforeend', htmlContent);

const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(e);
    const source = e.target.dataset.src;
    console.log(source);
    const lightBoxModal = basicLightbox.create(`<img src="${source}">`);
    lightBoxModal.show();

    const handleEscapePress = (e) => {
        if (e.key === 'Escape' && lightBoxModal.visible()) {
            lightBoxModal.close();
            document.removeEventListener('keydown', handleEscapePress);
        }
    };

    document.addEventListener('keydown', handleEscapePress);
};

galleryContainer.addEventListener('click', handleClick);
