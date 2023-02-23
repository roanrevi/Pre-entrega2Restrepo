import React from 'react'

const Cart = () => {
    return (
        <div className='formulario'>
            <label htmlFor="">Nombre</label>
            <input className='nombre' type="text"></input><br/><br/>
            <label htmlFor="">Idetificacion</label>
            <input className='identificacion' type="text" /><br/><br/>
            <button className='enviar-solicitud' type='submit'>Enviar</button>
        </div>
    )
}

export default Cart