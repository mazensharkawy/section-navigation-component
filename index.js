const WIDTH_FACTOR = 0.8;
const navbar = document.getElementById("navbar");
const showMoreMenu = document.getElementById("show-more-menu");
const showMoreButton = document.getElementById("show-more-button");

function reportWindowSize() {
  if (!navbar) return;
  const children = navbar.children;

  let childrenWidth = 0;
  //using this syntax to support IE
  for (var i = 0; i < children.length; i++) {
    childrenWidth += children[i].offsetWidth;
  }
  let currentWidth = childrenWidth;
  if (childrenWidth > window.outerWidth * WIDTH_FACTOR) {
    showMoreButton.style.display = "block";
    while (currentWidth > window.outerWidth * WIDTH_FACTOR) {
      let elementToMove = navbar.childNodes[navbar.childNodes.length - 3];
      if (!elementToMove) return;
      currentWidth -= elementToMove.offsetWidth || 0;
      showMoreMenu.insertBefore(elementToMove, showMoreMenu.firstChild);
    }
  } else {
    if (showMoreMenu.childNodes.length < 1) return;
    let elementToMove;
    do {
      elementToMove = showMoreMenu.firstChild;
      if (!elementToMove) {
        showMoreButton.style.display = "none";
        return;
      }
      if (showMoreMenu.childNodes.length === 1)
        currentWidth -= showMoreButton.offsetWidth;
      navbar.insertBefore(elementToMove, showMoreButton);
    } while (currentWidth + elementToMove.offsetWidth < window.outerWidth);
    showMoreButton.style.display = "none";
  }
}
reportWindowSize();
window.onresize = reportWindowSize;
