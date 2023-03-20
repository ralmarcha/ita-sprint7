
export function Info({open, onClose}) {
if(!open) return null
    return (
      <>
         <div className="overlay" onClick={onClose}>
        <div  className="modalContainer" >
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">En este componente debe indicar el número de páginas que tendrá su sitio web</p>
          </div>
       
          </div>
</>
  )
}
    

