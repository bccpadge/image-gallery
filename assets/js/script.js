// declare variables
const gallery = document.querySelector("[data-js-image-gallery]");
const popup = document.querySelector("[data-js-popup]");
const selectedImage = document.querySelector("[data-js-selected-image]");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `./assets/images/image-${i}.jpg`;
  image.alt = `Nature and landscape views`;
  image.classList.add("gallery__image");

  image.addEventListener("click", () => {
    // popup stuff
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `./assets/images/image-${i}.jpg`;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  selectedImage.src = "";
  selectedImage.alt = "";
});
