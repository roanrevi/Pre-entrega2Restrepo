import { useState } from 'react';
const Stock=6;
const Contador = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        if(contador<Stock)
        {setContador(contador + 1)}
        ;
    };
    const reset = () => {
        setContador(0);
    };
    const restar = () => {
        if(contador >0)
        {setContador(contador - 1);}
        else{
            setContador(0)
        }
    };

    return (
        <div className=''>
        <p>{contador}</p>
        <button className="boton" onClick={sumar}> + </button>
        <button className="boton" onClick={restar}> - </button>        
        </div>
    );
    };
// realizar que se limite los valores negativos o que llame un props donde de el stock y este no supere ese stock

export default Contador;