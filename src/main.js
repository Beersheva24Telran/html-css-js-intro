//refernces to the HTML elements
const galleryItems = document.querySelectorAll(".gallery_item");
const detailedContainerImage = document.querySelector(".detailedContainer_image");
const detailedContainerTitle = document.querySelector(".detailedContainer_title");
//functions
function setDetails(itemElement) {
    detailedContainerImage.src = itemElement.getAttribute("data-detailed-image");
    detailedContainerTitle.innerHTML = itemElement.getAttribute("data-detailed-title");
}
galleryItems.forEach((item,index) => item.addEventListener("click", () => setDetails(galleryItems[index])));