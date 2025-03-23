const images = document.querySelectorAll(".image");
let draggedElement = null;

images.forEach((image) => {
  image.addEventListener("dragstart", function (e) {
    draggedElement = this;
    setTimeout(() => (this.style.visibility = "hidden"), 0);
  });

  image.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  image.addEventListener("drop", function (e) {
    e.preventDefault();

    if (draggedElement !== this) {
      // Swap contents
      let temp = this.innerHTML;
      this.innerHTML = draggedElement.innerHTML;
      draggedElement.innerHTML = temp;
    }

    draggedElement.style.visibility = "visible";
    draggedElement = null;
  });

  image.addEventListener("dragend", function () {
    this.style.visibility = "visible";
  });
});
