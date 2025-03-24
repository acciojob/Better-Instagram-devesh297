const images = document.querySelectorAll(".image");
let draggedElement = null;


images.forEach((image) => {

  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target; // Store the dragged element
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("dragging"); // Add a dragging class
  });

  // When dragging over another image
  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow dropping
  });

  // When dropped on another image
  image.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetElement = e.target;

    // Swap inner text (or you can swap background images)
    if (draggedElement && targetElement !== draggedElement) {
      let temp = draggedElement.innerHTML;
      draggedElement.innerHTML = targetElement.innerHTML;
      targetElement.innerHTML = temp;
    }

    draggedElement.classList.remove("dragging"); // Remove dragging class
    draggedElement = null; // Reset
  });
});
