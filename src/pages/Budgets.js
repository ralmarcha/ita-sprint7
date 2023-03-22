import {Card, Checkbox, Label} from 'flowbite-react';
import Button from '../components/Button';
import {Budget} from '../components/Budget';
import {data} from '../data'
import {useLocalStorage} from '../components/useLocalStorage';
import {useEffect, useState} from 'react';
//import { useLocation } from 'react-router-dom';


const Budgets = () => {
    
const [isChecked, setIsChecked] = useLocalStorage('isCheked',
      new Array(data.length).fill(false));
  
  const [total, setTotal] = useLocalStorage('total', 0);
  
  const [client, setClient] = useLocalStorage('client',"");
  const [title, setTitle] = useLocalStorage('title', "");

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
  
  //array de presupuestos, hay q hacer un array de objetos como el de Budget
  //q se cree una tabla
  const [list, setList] = useLocalStorage('list', [])
  
  //Botón para guardar los datos generando una card a la derecha
  const saveData = (e) => {
    e.preventDefault();
    let newBudget = {
      Nom: title, 
      Data: new Date().toLocaleDateString(), 
      Client: client,
      Serveis: services,    
      Pàgines: pagines,
      Idiomes: idiomes,
      Preu: sumaTotal
    } 
    setList([...list, newBudget])
 
    
   localStorage.setItem('mostrar', JSON.stringify(mostrar))
   localStorage.setItem('pagines', JSON.stringify(pagines))
   localStorage.setItem('idiomes', JSON.stringify(idiomes))
   localStorage.setItem('sumaTotal',JSON.stringify(sumaTotal))
   localStorage.setItem('isChecked', JSON.stringify(isChecked))
   localStorage.setItem('services', JSON.stringify(services))
   localStorage.setItem('title', JSON.stringify(title))
    localStorage.setItem('client', JSON.stringify(client))
  
  }
  

  


//para dinamizar la url
  // let { search } = useLocation();
  // let query = new URLSearchParams(search);

  
   

  return (
    <>
      <div className='flex flex-row back'>
    <div className='basis-1/2 ml-12'>
       <h1 className="title">Pressupost</h1>
         <div className="flex flex-col gap-4" id="checkbox" >
           <h2>¿Qué vols fer?</h2>
            <div className="flex items-center gap-2 ml-40" >
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

          <div className="flex items-center gap-2 ml-40">
            <Checkbox id="seo" checked={isChecked[1]}
                  onChange={() =>handleOnChange(1)} />
              <Label htmlFor="seo">
                Una consultoria SEO (300€)
              </Label>
          </div>
          <div className="flex items-center gap-2 ml-40">
            <Checkbox id="ads" checked={isChecked[2]}
                  onChange={() =>handleOnChange(2)}/>
            <Label htmlFor="ads">
            Una campanya de Google Ads  (200€)
            </Label>
          </div>
          <h2>Preu: {sumaTotal}€ </h2> 
              
       
{/* //hacer un componente y labels*/}

          <form className="flex flex-col gap-4">
              <div className='ml-40'>
                      <input type="text" title={title} onChange={e=>setTitle(e.target.value)}  placeholder="Budget name" />
              </div>
              <div className='ml-40'>
                      <input type="text" client={client} onChange={e=>setClient(e.target.value)}  placeholder="Client name" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700  ml-40 text-white font-bold py-2 px-4 rounded-full w-36" onClick={saveData}>
                  Guardar
                </button>
          </form>
        </div>    
        


      {/* <Budget isChecked={services} pagines={pagines} idiomes={idiomes} sumaTotal={sumaTotal} title={title} client={client} /> */}
      
      


    </div>
    <div className='basis-1/2 mt-20 mr-14'>
       <Budget list={list}/>
      </div>
      </div>
     </>
  );
}

export default Budgets;