const pictures = document.getElementById("pictures");
const box1 = document.getElementById("box-game-1");
const box2 = document.getElementById("box-game-2");
const box3 = document.getElementById("box-game-3");

pictures.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

pictures.addEventListener("drag", (e) => {
  e.target.classList.add("picture-on");
});

pictures.addEventListener("dragend", (e) => {
  e.target.classList.remove("picture-on");
});

box1.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box1.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("picture-on");
  element.classList.add("picture-move");
  box1.textContent = "";
  box1.appendChild(pictures.removeChild(element));
});

box2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box2.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("picture-on");
  element.classList.add("picture-move");
  box2.textContent = "";
  box2.appendChild(pictures.removeChild(element));
});

box3.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box3.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("picture-on");
  element.classList.add("picture-move");
  box3.textContent = "";
  box3.appendChild(pictures.removeChild(element));
});

const reset = document.getElementById("reset");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

reset.addEventListener("click", (e) => {
  e.preventDefault();

  box1.innerHTML = "";
  box1.textContent = "Arrastra y suelte la imagen aqui";

  box2.innerHTML = "";
  box2.textContent = "Arrastra y suelte la imagen aqui";

  box3.innerHTML = "";
  box3.textContent = "Arrastra y suelte la imagen aqui";

  pictures.innerHTML =
    '<img src="assets/images/Rompe3.png" alt="" id="img-1" class="picture" draggable="true"/> <img src="assets/images/rompe2.png" alt="" id="img-2" class="picture" draggable="true"/> <img src="assets/images/Rompe1.png"alt=""id="img-3" class="picture"draggable="true" />';
});
