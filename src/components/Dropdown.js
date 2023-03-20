
import { Label, Card } from 'flowbite-react';
import Button from './Button'
import { useState } from 'react';



function Dropdown() {

    const [idiomes, setIdiomes] = useState(1)
  const [pagines, setPagines] = useState(1)
  
    
return (

    <div className="max-w-lg ml-10">
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
}

export default Dropdown