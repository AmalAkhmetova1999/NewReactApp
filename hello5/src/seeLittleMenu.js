function seeLittleMenu() {
    if (document.getElementById("littlemenu").style.display === "none") {
      document.getElementById("littlemenu").style = "display:block";
    } else {
      document.getElementById("littlemenu").style = "display:none";
    }
  }
  window.onclick = function (event) {
    if (!event.target.matches(".btn")) {
      var dropdowns = document.getElementById("littlemenu");
      if (dropdowns.style.display === "block") {
        dropdowns.style = "display:none";
      }
    }
  };
  export default seeLittleMenu;