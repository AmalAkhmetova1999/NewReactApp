import React, { useState } from "react";
import FirstPizza from "./FirstPizza";
import SecondPizza from "./SecondPizza";
import ThirdPizza from "./ThirdPizza";
import FourthPizza from "./FourthPizza";
import FifthPizza from "./FifthPizza";

function Admin() {
  const [priceOne, setPriceOne] = useState("100:-");
  const [showFirst, setShowFirst] = useState(false);
  const [priceTwo, setPriceTwo] = useState("100:-");
  const [showSecond, setShowSecond] = useState(false);
  const [priceThree, setPriceThree] = useState("100:-");
  const [showThird, setShowThird] = useState(false);
  const [priceFour, setPriceFour] = useState("100:-");
  const [showFourth, setShowFourth] = useState(false);
  const [priceFive, setPriceFive] = useState("100:-");
  const [showFifth, setShowFifth] = useState(false);
   
  const p = () => localStorage.setItem("PriceOne", priceOne);
  localStorage.setItem("PriceTwo", priceTwo);
  localStorage.setItem("PriceThree", priceThree);
  localStorage.setItem("PriceFour", priceFour);
  localStorage.setItem("PriceFive", priceFive);
  return (
    <div>
      <div>
        <ul>
        <li>
        <p>KEBABPIZZA <FirstPizza
          value={priceOne}
          handleChange={(e) => setPriceOne(e.target.value)}
          handleDoubleClick={() => setShowFirst(true)}
          handleBlur={() => setShowFirst(false)}
          showInputEle={showFirst}
        /></p>
        <p>Kebabkött, isbergssallad, lök, tomater, fefferoni, vitlökssås, mild sås  </p> 
         
    </li>
    <li>
        <p>VIKING KEBAB (INBAKAD) <SecondPizza
          value={priceTwo}
          handleChange={(e) => setPriceTwo(e.target.value)}
          handleDoubleClick={() => setShowSecond(true)}
          handleBlur={() => setShowSecond(false)}
          showInputEle={showSecond}
        /> </p>
        <p>Lök, tomater, fefferoni, isbergssallad, kebabkött, vitlökssås, mild sås  </p> 
    </li>
    <li>
        <p>GYROS PIZZA  <ThirdPizza
          value={priceThree}
          handleChange={(e) => setPriceThree(e.target.value)}
          handleDoubleClick={() => setShowThird(true)}
          handleBlur={() => setShowThird(false)}
          showInputEle={showThird}
        /> </p>
        <p>Gyros, isbergssallad, lök, tomater, fefferoni, vitlökssås, mild sås </p> 
    </li>
    <li>
        <p>MEXICANA <FourthPizza
          value={priceFour}
          handleChange={(e) => setPriceFour(e.target.value)}
          handleDoubleClick={() => setShowFourth(true)}
          handleBlur={() => setShowFourth(false)}
          showInputEle={showFourth}
        /> </p>
        <p> Stekt köttfärssås, lök, jalapeño, tacosås, tacokryddmix, färsk vitlök, grön chili </p>  
    </li>
    <li>
        <p>AZTEKA <FifthPizza
          value={priceFive}
          handleChange={(e) => setPriceFive(e.target.value)}
          handleDoubleClick={() => setShowFifth(true)}
          handleBlur={() => setShowFifth(false)}
          showInputEle={showFifth}
        /> </p>
        <p>Skinka, jalapeño, tacosås, tacokryddmix, vitlökssås eller gräddfil </p> 
    </li>     
    </ul> 
      </div>
      <div><button style={{marginLeft:"auto",marginRight:"auto"}} onClick={p}>SAVE</button></div>
    </div>
  );
}

export default Admin;