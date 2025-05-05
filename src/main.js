const galleryItems = document.querySelectorAll(".gallery_item");
galleryItems.forEach((item,index) => item.addEventListener("click", () => console.log("clicked ", index)))