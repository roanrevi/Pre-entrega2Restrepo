import { useContext,useState } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, nombre, cargo, horas, fecha,valor }) => {
    const [cart, setCart, adicionACart,sumar,restar,contador, setContador] = useContext(CartContext);
    console.log(contador)
    return (
        <div className='botons-add'>
            <p>{contador}</p>
            <button className="boton" onClick={restar}> - </button> 
            <button className="boton" onClick={sumar}> + </button>            
            <br></br> 
            <button className="boton-adicionar" > Adicionar al carro </button> 
        </div>
        );
    };
         // realizar que se limite los valores negativos o que llame un props donde de el stock y este no supere ese stock
        //  <Button onClick={() => addToCart()}>
        //      Add to cart: {count}
        //  </Button>
export default ItemCount;