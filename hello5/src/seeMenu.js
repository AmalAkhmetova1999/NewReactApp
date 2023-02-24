function seeMenu() {
    var display = getComputedStyle(document.getElementById("menu")).display;
    if (display === "none") {
      document.getElementById("menu").style = "display:block";
    } else {
      document.getElementById("menu").style = "display:none";
    }
  }
  window.onclick = function (event) {
    if (!event.target.matches(".btn")) {
      var dropdowns = document.getElementById("menu");
      if (dropdowns.style.display === "block") {
        dropdowns.style = "display:none";
      }
    }
  };
  
  export default seeMenu;
  