function clickBtn() {
  const button = document.getElementById("btn");
  button.addEventListener("click", alertClick);
};

function alertClick(event) {
  event.target.style.backgroundColor = "red";
};

window.onload = clickBtn;