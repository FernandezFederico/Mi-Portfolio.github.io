const cursorInit = (cursorElement) => {
  const isClickedClass = "isClicked";
  const isHidenClass = "isHiden";

  if (!cursorElement) return;

  // mueve el div cursor a la posición del mouse centrando según sus dimensiones
  const onMouseMove = (e) => {
    const rect = cursorElement.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;
    cursorElement.style.top = (e.pageY - offsetY) + "px";
    cursorElement.style.left = (e.pageX - offsetX) + "px";
  };
  // agrega y quita la class isClickedClass al cursor
  const onMouseDown = () => {
    cursorElement.classList.add(isClickedClass);
  };

  const onMouseUp = () => {
    cursorElement.classList.remove(isClickedClass);
  };

  // agrega y quita la class isHidenClass al cursor

  const onMouseLeave = () => {
    cursorElement.classList.add(isHidenClass);
  };

  const onMouseEnter = () => {
    cursorElement.classList.remove(isHidenClass);
  };

  // Add event listeners
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mouseleave", onMouseLeave);
  document.addEventListener("mouseenter", onMouseEnter);
  handleLinkHover(cursorElement);
  handleTextHover(cursorElement);
};

// aplica la class isLinckHoverClass al cursor al pasar el mouse por encima de un link
const handleLinkHover = (cursorElement) => {
  const isLinckHoverClass = "isLinckHover";
  document
    .querySelectorAll(
      'a, button, .link__custom, input[type="button"], input[type="submit"], input[type="text"], input[type="email"], textarea'
    )
    .forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursorElement.classList.add(isLinckHoverClass);
      });
      link.addEventListener("mouseleave", () => {
        cursorElement.classList.remove(isLinckHoverClass);
      });
    });
};

const handleTextHover = (cursorElement) => {
  const isTextHoverClass = "isTextHover";
  document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, img").forEach((text) => {
    text.addEventListener("mouseover", () => {
      cursorElement.classList.add(isTextHoverClass);
    });
    text.addEventListener("mouseleave", () => {
      cursorElement.classList.remove(isTextHoverClass);
    });
  });
};

export { cursorInit, handleLinkHover };
