export const toggleSwitch = () => {
  const btnSwitch = document.getElementById("switch");

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("active");
  });
};
