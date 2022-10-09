import { useState, useEffect } from "react";


function useDebounce(value,delay) {
    const [debounceValue,setDebounceValue] = useState(value)

    useEffect(()=>{
        const timeDelay = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return(()=>{
            clearTimeout(timeDelay)
        })
    },[value])
    return (
        debounceValue 
     );
}

export default useDebounce;