// cursor personalizado
import { cursorInit } from "../JS/cursor-custom.js";

const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
const isTouch = isTouchDevice();

if (!isTouch) {
    const cursorElement = document.querySelector(".cursor");
    const customCursorActiveClass = "customCursorActive";

    cursorInit(cursorElement);

    document.body.classList.add(customCursorActiveClass);
};