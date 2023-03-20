import { Card } from "flowbite-react"


export function Budget({ pagines, idiomes, isChecked, sumaTotal }) {
    return (
    <div>
       <Card href="#">
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Title
          </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
  
                    Serveis: {isChecked}     
                    <br />
                    Pàgines: {pagines}
                     <br />
                     Idiomes: {idiomes}
                    <br />
                     Preu final: {sumaTotal} €
                </p>
        </Card>             
    </div> 
    )
}