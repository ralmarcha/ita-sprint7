function Button({ value, setValue}) {
    
    const aumentar = (ev) => {
        ev.preventDefault();
       setValue(value => value + 1)
    }

    const disminuir = (ev) => {
        ev.preventDefault();
        setValue(value => value > 0 ? value -1 : value)
    }

    const handleChange =(ev)=>{
        ev.preventDefault();
        setValue(parseInt(ev.target.value));
    }



    return (
        <>
            <button id="disminuir" type="button" onClick={disminuir} className="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-2 py-2 mr-2 mb-2">-</button>
            <input type="number" className="w-14 h-8"  required={true} value={value} onChange={handleChange} min={0} 
             ></input>
            <button id="aumentar" type="button" onClick={aumentar} className="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-2 py-2 mr-2 mb-2">+</button>         
        </>
)
}

export default Button;


