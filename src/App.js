import React from 'react';
import { useState } from "react";
import {data} from './data'
import './App.css';
import { Checkbox , Label} from 'flowbite-react';


function App() {

  const [isChecked, setIsChecked] = useState(new Array(data.length).fill(false));
  const [total, setTotal] = useState(0);
//fem un array dels q estan clicats
  const handleOnChange = (position) => {

    const checkedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(checkedState);

    const total = checkedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(total);
  };
  
 

  return (
   <>
<div
  className="flex flex-col gap-4"
  id="checkbox"
>¿Qué vols fer?

  <div className="flex items-center gap-2">
    <Checkbox id="web" checked={isChecked[0]}
          onChange={() =>handleOnChange(0)} />
    <Label htmlFor="web">
    Una pàgina web (500€)
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="seo" checked={isChecked[1]}
          onChange={() =>handleOnChange(1)}/>
    <Label htmlFor="seo">
    Una consultoria SEO (300€)
    </Label>
        </div>
  <div className="flex items-center gap-2">
    <Checkbox id="ads" checked={isChecked[2]}
          onChange={() =>handleOnChange(2)}/>
    <Label htmlFor="ads">
    Una campanya de Google Ads  (200€)
    </Label>
  </div>
  <p>Preu: {total}€ </p> 
      
</div>

  
      
      </> 
  );
}

export default App;
