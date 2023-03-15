
import {  Card, Checkbox, Label} from 'flowbite-react';
import Button from '../components/Button';
import { useState , useEffect } from "react";
import {data} from '../data'


const Budgets = () => {
    

    
    
    
    
   

    
   const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false));
  
    useEffect(() => {
      window.localStorage.setItem('isChecked', JSON.stringify(isChecked))
    }, [isChecked])
    useEffect(() => {
      const data = window.localStorage.getItem('isCheked')
      if (data !== null) {
       setIsChecked(JSON.parse(data))
      }
    }, [])
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
  
    const checkedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(checkedState);

    const total = checkedState.reduce(
      (sum, currentState, index) => {
        // if (index[0]) {
        //   const suma = pagines * idiomes * 30;
        // }
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

  const [idiomes, setIdiomes] = useState(1)
  const [pagines, setPagines] = useState(1)
  const suma = pagines * idiomes * 30;
   
 
    
    return (
    <>
    <h1>Budgets</h1>
   
     <div  className="flex flex-col gap-4" id="checkbox" >
        <h1>¿Qué vols fer?</h1>

        <div className="flex items-center gap-2" >
         <Checkbox id="web" checked={isChecked[0]}
          onChange={() =>handleOnChange(0)} onClick={()=>setMostrar(!mostrar)} />
        <Label htmlFor="web">
            Una pàgina web (500€)
        </Label>
         </div>
        {mostrar ?                                
         ( <div className="max-w-sm ml-10">
          <Card>
            <form className="flex flex-col gap-2" >
                <div className="flex gap-4">
                  <div className="block">
                 <Label htmlFor="pags" value="Número de pàgines :"/>
                  </div>     
                   <Button value={pagines} setValue={setPagines}
                   /> 

                </div>
              
              <div className="flex gap-4">
               <div className="block">
                  <Label htmlFor="idiomes" value="Número d ' idiomes :"/>
               </div>
                  <Button value={idiomes}  setValue={setIdiomes}
                    /> 
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
        
  <h2>Preu: {total + suma}€ </h2> 
      
      </div>    
      



      {/* <div>
        {data.map((data) => (
        <div>
          <input type="checkbox" id ={data.index} key={data.index} name={data.name} checked={isChecked[data.index]}
          onChange={() =>handleOnChange(data.index)} onClick={()=>setMostrar(!mostrar)}></input>
          <label for={data.index}>{data.name}</label>
          </div>
        ))}
     
        
      </div> */}
</> 
  );
}
export default Budgets;