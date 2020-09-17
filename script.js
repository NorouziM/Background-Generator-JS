function inter() {
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  var cssCode = document.querySelector(".css-code");
  document.body.style.background = `linear-gradient( 90deg, ${color1} 0%, ${color2} 50% )`;
  cssCode.innerHTML = `linear-gradient( 90deg, ${color1} 0%, ${color2} 50% )`;
}
var interval = setInterval(inter, 100);
