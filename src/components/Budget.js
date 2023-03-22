export function Budget({list}) {
    
    return (
    <div className="text-center mt-8">
         <table className="table-auto border-separate border-spacing-2 border border-slate-400 ...">
            <thead>
             <tr>
              <th className="border border-slate-300 ...">Número</th>
              <th className="border border-slate-300 ...">Nom</th>
              <th className="border border-slate-300 ...">Client</th>
              <th className="border border-slate-300 ...">Data</th>
              <th className="border border-slate-300 ...">Serveis</th>
              <th className="border border-slate-300 ...">Idiomes</th>
              <th className="border border-slate-300 ...">Pàgines</th>
              <th className="border border-slate-300 ...">Total</th>
             </tr>
           </thead>
           <tbody>
           {list.map((newBudget, index)=>(
            <tr>
              <td className="border border-slate-300 ...">{index + 1}</td>
              <td className="border border-slate-300 ...">{newBudget.Nom}</td>
              <td className="border border-slate-300 ...">{newBudget.Client}</td>
              <td className="border border-slate-300 ...">{newBudget.Data}</td>
              <td className="border border-slate-300 ...">{newBudget.Serveis.map(servei=><p>{servei}</p>) }</td>
              <td className="border border-slate-300 ...">{newBudget.Idiomes }</td>
              <td className="border border-slate-300 ...">{newBudget.Pàgines }</td>
              <td className="border border-slate-300 ...">{newBudget.Preu} € </td>
            </tr>
            )) }
           </tbody>
          </table>
        </div> 
    )
}