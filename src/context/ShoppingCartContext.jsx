import { useState,  createContext} from "react";


// const StateComponentProvider = ({children}) => {
//     const [counter, setCounter] = useState(0);
//     const increment=()=>{
//         setCounter(counter+1);
//     };
//     const decrement=()=>{
//         setCounter(counter-1);
//     };
    
//     return (
//         <CounterContext.Provider value={{counter, increment, decrement}}>
            
//             {children }
//         </CounterContext.Provider>
//     )
//     }

export const CartContext=createContext(null);
import React from 'react'
export const ShoppingCartProvider= ({children}) => {
        const [cart, setCart]=useState([]);
        const [contador, setContador] = useState(10);       
        const adicionACart = () => {
            setCart((ItemActuales) => {
                const ItemEncontrardo = ItemActuales.find((item) => item.id === id);                
                if (ItemEncontrardo) {
                    return ItemActuales.map((item) => {
                    if (item.id === id) {
                        return { ...item, horas: item.horas + contador };
                    } else {
                        return item;
                    }
                    });
                } else {
                    return [...ItemActuales, { id, horas: contador, fecha, nombre, cargo, valor}];
                }
                });
            };
            const sumar = () => {
                if(contador<horas)
                {setContador(contador + 1)}
                ;
            };
            const restar = () => {
                if(contador >0)
                {setContador(contador - 1);}
                else{
                    setContador(0)
                }
            };
    return (
        <CartContext.Provider value={[cart, setCart,adicionACart,sumar,restar,contador,setContador]}>{children}</ CartContext.Provider>
    );
};

export default ShoppingCartProvider;