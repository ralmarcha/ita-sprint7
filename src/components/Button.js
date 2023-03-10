

function Button({ value, setVal}) {
    
    const aumentar = (ev) => {
        ev.preventDefault();
       setVal(value => value + 1)
    }
    const disminuir = (ev) => {
        ev.preventDefault();
        setVal(value => value > 1 ? value -1 : value)
    }
    const handleChange =(ev)=>{
        ev.preventDefault();
        setVal(parseInt(ev.target.value));
    }
    return (
        <>
            <button id="disminuir" type="button" onClick={disminuir} class=" text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-2 py-2 mr-2 mb-2">-</button>
            <input type="number" className="w-14 h-8"  required={true} value={value} onChange={handleChange} min={1} 
             ></input>
            <button id="aumentar" type="button" onClick={aumentar} class=" text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-2 py-2 mr-2 mb-2">+</button>         
        </>
)

}
export default Button;


