const images = document.querySelectorAll(".image");
let draggedElement = null;

images.forEach((image) => {

  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("dragging");
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();
    
    if (!draggedElement || draggedElement === e.target) return;

    // Swap background images
    let tempBackground = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = tempBackground;

    draggedElement.classList.remove("dragging");
    draggedElement = null;
  });

  image.addEventListener("dragend", () => {
    if (draggedElement) {
      draggedElement.classList.remove("dragging");
    }
    draggedElement = null;
  });
});
