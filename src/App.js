import React from 'react';
import { useState } from "react";
import {data} from './data'
import './App.css';
import { Checkbox, Label , TextInput, Card} from 'flowbite-react';


function App() {

  const [isChecked, setIsChecked] = useState(new Array(data.length).fill(false));
  const [total, setTotal] = useState(0);

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
 
  
  const [mostrar, setMostrar] = useState(false);

  const [idiomes, setIdiomes] = useState(0)
  const [pagines, setPagines] = useState(0)
  const suma = pagines * idiomes * 30 

  return (
   <>
     <div  className="flex flex-col gap-4" id="checkbox" >
        <h1>¿Qué vols fer?</h1>

     <div className="flex items-center gap-2">
         <Checkbox id="web" checked={isChecked[0]}
          onChange={() =>handleOnChange(0)} onClick={()=>setMostrar(!mostrar)}/>
        <Label htmlFor="web">
            Una pàgina web (500€)
        </Label>
         </div>
            {mostrar ?
                              
         ( <div className="max-w-xs ml-10">
          <Card>
            <form className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="block">
                 <Label htmlFor="pags" value="Número de pàgines :"/>
                  </div>      
                 <TextInput className="w-14" id="pags" type="number" required={true} name="pagines" onChange={ev => setPagines(ev.target.value)} placeholder="0"/>
                </div>
              <div className="flex gap-4">
               <div className="block">
                  <Label htmlFor="idiomes" value="Número d ' idiomes :"/>
               </div>
                 <TextInput className="w-14" id="idiomes" type="number" required={true} name="idiomes" onChange={ev => setIdiomes(ev.target.value)} placeholder="0"/>
             </div>
           </form>
         </Card>
          </div>)
      : null}
            
  <div className="flex items-center gap-2">
    <Checkbox id="seo" checked={isChecked[1]}
          onChange={() =>handleOnChange(1)} />
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
        
  <p>Preu: {total + suma}€ </p> 
      
</div>

  
      
      </> 
  );
}

export default App;
