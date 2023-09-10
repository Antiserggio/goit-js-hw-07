import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);
const listGallery = document.querySelector(".gallery");
console.log(listGallery);

listGallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
listGallery.addEventListener("click", handleClick);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        ` <li class="gallery__item">
             <a class="gallery__link" href="${original} " onclick="event.preventDefault()">
             <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />
             </a>
        </li>`
    )
    .join("");
}
