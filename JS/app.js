// cursor personalizado
import { cursorInit } from "../JS/cursor-custom.js";

const isTouchDevice = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
const isTouch = isTouchDevice();

if (!isTouch) {
  const cursorElement = document.querySelector(".cursor");
  // elimina el cursor por defecto
  const customCursorActiveClass = "customCursorActive";

  cursorInit(cursorElement);

  document.body.classList.add(customCursorActiveClass);

} else {
  const node1 = document.getElementById("cursor");
  node1.parentNode.removeChild(node1);
};


///ver que funcione en movil... no verifico que desaparezca el cursor
// verificar si corre el else...
