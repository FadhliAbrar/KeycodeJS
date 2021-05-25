let p = document.querySelectorAll(".eventKeycode");
let l = document.querySelector(".eventLocation");
let k = document.querySelector(".eventKey");
let c = document.querySelector(".eventCode");
window.addEventListener("keydown", (ev) => {
  p.forEach((e) => (e.innerHTML = ev.which));
  l.innerHTML = ev.location;
  k.innerHTML = ev.key;
  c.innerHTML = ev.code;
});
