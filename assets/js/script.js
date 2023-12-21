const toggle = () => {
  let body = document.getElementById("body");
  circle.classList.toggle("on");
  body.classList.toggle("dark");
};

let circle = document.getElementById("circle");
circle.addEventListener("click", toggle);
