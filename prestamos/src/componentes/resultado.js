import React from 'react'

const Resultado = ({cantidad,total,plazo}) => (
    <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>Lo que va a pagar en: {plazo} Meses</p>
        <p>Su pago mensual es de: ${parseInt( total / plazo )}</p>
        <p>Total a pagar: ${total}</p>
    </div>    
);


export default Resultado