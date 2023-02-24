const doc = document.createElement("div");
const pop = document.querySelector(".popup");

function basket() {
  document.getElementById("popup").style.display = "block";

  var decoded_cookie = decodeURIComponent(document.cookie);
  var coco = decoded_cookie.split(";");

  console.log(coco);

  //др функция и добавить иф инпут 0 в первую функцию
  if (document.cookie.length > 0) {
    doc.innerHTML = `<p style="margin-top:5%; font-size:20pt"><b> Du beställer</b></p>`;
    for (let pizzaFromBasket of coco) {
      //[a,b]
      console.log(pizzaFromBasket); //console: a
      //добавляем п: <div><p style="margin-top:5%; font-size:20pt"><b> Du beställer</b> </p>r</div>
      doc.innerHTML += ` <table className="po"><tr><td>${pizzaFromBasket}</td>
                  <td style="width:10%"><button><img style="width:30px" src="trash.png"></td>
                  </tr></table>`;

      pop.appendChild(doc);
    }
    document.getElementById("popImage").style.display = "none";
    document.getElementById("popText").style.display = "none";
  } else {
    doc.innerHTML = `<img className="varukorgImg" src="17249115.jpg">
  <h3 className="col-12 varukorgText">Tyvärr, <br>din varukorg är
      tom</h3>`;
    pop.appendChild(doc);
    document.getElementById("popImage").style.display = "none";
    document.getElementById("popText").style.display = "none";
  }
}

export default basket;
