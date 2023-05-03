let video = document.getElementById("video");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let progressBar = document.getElementById("progress-bar");

let timer = document.getElementById("time");

const mostrarMin = () => {
  let intervalId = setInterval(() => {
    let tiempoActual = video.currentTime.toFixed(0);
    let videoDuration = video.duration.toFixed(0);

    if (document.getElementById("video").duration < 60) {
      document.getElementById("time").textContent =
        "00:" + videoDuration + "/ 00:" + tiempoActual;
    } else {
      let tiempoActualMinutos = Math.floor(tiempoActual / 60);
      let tiempoActualSegundos = Math.floor(tiempoActual % 60);
      let duracionMinutos = Math.floor(videoDuration / 60);
      let duracionSegundos = Math.floor(videoDuration % 60);

      let tiempoActualFormateado = `${tiempoActualMinutos}:${
        tiempoActualSegundos < 10 ? "0" : ""
      }${tiempoActualSegundos}`;

      let duracionFormateado = `${duracionMinutos}:${
        duracionSegundos < 10 ? "0" : ""
      }${duracionSegundos}`;

      document.getElementById("time").textContent =
        tiempoActualFormateado + " / " + duracionFormateado;
    }
  }, 1000);
};

playButton.addEventListener("click", () => {
  video.play();

  mostrarMin();
});

pauseButton.addEventListener("click", () => {
  video.pause();
});



video.addEventListener("timeupdate", () => {
  let tiempoActual = video.currentTime;
  let duracion = video.duration;

  let progressPercentage = (tiempoActual / duracion) * 100;

  progressBar.style.width = `${progressPercentage}%`;
});
