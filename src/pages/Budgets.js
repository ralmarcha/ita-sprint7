
import {  Card, Checkbox, Label} from 'flowbite-react';
import Button from '../components/Button';
import { Budget } from '../components/Budget';
import {data} from '../data'
import { useLocalStorage } from '../components/useLocalStorage';
import { useEffect, useState } from 'react';


const Budgets = () => {
    
const [isChecked, setIsChecked] = useLocalStorage('isCheked',
      new Array(data.length).fill(false));
  
const [total, setTotal] = useLocalStorage('total', 0);

const handleOnChange = (position) => {
  
    const checkedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(checkedState);

    const sumaTotal = checkedState.reduce(
      (sum, currentState, index) => {
       if (currentState === true) {
          return sum + data[index].price;
        }
        return sum;
      },
      0
    );
      setTotal(sumaTotal);
  };
 
  const [mostrar, setMostrar] = useLocalStorage('mostrar', false);

  const [idiomes, setIdiomes] = useState(0)
  const [pagines, setPagines] = useState(0)
  const suma = pagines * idiomes * 30
  const sumaTotal = suma + total;

  const [services, setServices] = useState([]);
  const servicesName = [];


  useEffect(() => {
    isChecked.map((item, index) => {
      if (item === true) servicesName.push(data[index].name);
    });
    setServices(servicesName);
  }, [isChecked]);
  
  //Botón para guardar los datos generando una card a la derecha
  const saveData = () => {
   localStorage.setItem('mostrar', JSON.stringify(mostrar))
   localStorage.setItem('pagines', JSON.stringify(pagines))
   localStorage.setItem('idiomes', JSON.stringify(idiomes))
   localStorage.setItem('sumaTotal',JSON.stringify(sumaTotal))
   localStorage.setItem('isChecked', JSON.stringify(isChecked))
   localStorage.setItem('services', JSON.stringify(services))
  }
  


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
        
          <h2>Preu: {sumaTotal}€ </h2> 
        <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={saveData}>
          Save Budget
    </button></div>
          
    
        </div>    
        


      <Budget isChecked={services}  pagines={pagines} idiomes={idiomes} sumaTotal={sumaTotal}/>



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