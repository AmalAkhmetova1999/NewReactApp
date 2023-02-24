import React from "react";
import "./main.css"

const Home = () => {
  const FirstPrice = localStorage.getItem('PriceOne') || ('100:-');
  const SecondPrice = localStorage.getItem('PriceTwo')|| ('100:-');
  const ThirdPrice = localStorage.getItem('PriceThree')|| ('100:-');
  const FourthPrice = localStorage.getItem('PriceFour')|| ('100:-');
  const FifthPrice = localStorage.getItem('PriceFive')|| ('100:-');
  return <div>
  <ul>
    <li>
    <p>KEBABPIZZA {FirstPrice} </p>
    <p>Kebabkött, isbergssallad, lök, tomater, fefferoni, vitlökssås, mild sås</p>
    </li>
    <li>
    <p>VIKING KEBAB (INBAKAD) {SecondPrice}</p>
                <p>Lök, tomater, fefferoni, isbergssallad, kebabkött, vitlökssås, mild sås</p>
                </li>
                <li>
                <p>GYROS PIZZA {ThirdPrice}</p>
                <p>Gyros, isbergssallad, lök, tomater, fefferoni, vitlökssås, mild sås</p>
                </li>
                <li>
                <p>MEXICANA {FourthPrice}</p>
                <p>Stekt köttfärssås, lök, jalapeño, tacosås, tacokryddmix, färsk vitlök, grön chili</p>    
    </li>
    <li>
    <p>AZTEKA {FifthPrice}</p>
                <p>Skinka, jalapeño, tacosås, tacokryddmix, vitlökssås eller gräddfil</p>
    </li>
  </ul>
  </div>;
};

export default Home;
