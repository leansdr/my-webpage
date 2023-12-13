const toggle = () => {
  let body = document.getElementById("body");
  btn.classList.toggle("on");
  body.classList.toggle("dark");
  btn.classList.toggle("border-button");
};

let btn = document.getElementById("button-toogle");
btn.addEventListener("click", toggle);
