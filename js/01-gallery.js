import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
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

function handleClick(evt) {
  //   console.log(evt.target.nodeName);
  if (evt.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="1280" >
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  listGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });

  function onEscKeyPress(e) {
    if (e.code !== "Escape") return;
    instance.close();
  }
}
