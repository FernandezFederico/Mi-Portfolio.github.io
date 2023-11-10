// Cursor
const cursorElement = document.querySelector(".cursor");
// class que se va a agregar al cursor
const isClickedClass = "isClicked";
const isHidenClass = "isHiden";
const isLinckHoverClass = "isLinckHover";
const customCursorActiveClass = "customCursorActive";

// Add event listeners
 export const cursorEvent = () => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mouseleave", onMouseLeave);
  document.addEventListener("mouseenter", onMouseEnter);
  handleLinkHover();
};

//mueve el div cursor a la posicion del mouse
const onMouseMove = (e) => {
  cursorElement.setAttribute(
    "style",
    "top: " + (e.pageY - 50) + "px; left: " + (e.pageX - 50) + "px;"
  );
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

// aplica la class isLinckHoverClass al cursor al pasar el mouse por encima de un link

const handleLinkHover = () => {
  document
    .querySelectorAll(
      'img, a, button, .linkCustom, input[type="button"], input[type="submit"]'
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

// activa el cursor al cargar la página
document.body.classList.add(customCursorActiveClass);