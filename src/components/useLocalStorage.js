import { useState } from "react";
//falta usar el useEffect¿?

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })
    
    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
          }
          catch (error) {
              console.error(error)
          }
        
    }
    return [storedValue, setValue]  
}

// useEffect(() => {
    //   window.localStorage.setItem('isChecked', JSON.stringify(isChecked))
    // }, [isChecked])
    // useEffect(() => {
    //   const data = window.localStorage.getItem('isCheked')
    //   if (data !== null) {
    //    setIsChecked(JSON.parse(data))
    //   }
    // }, [])