import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

const ItemDetail = ({datos}) => {
    const { id } = useParams();
    const usuarioFilter=datos.filter((dato)=>dato.ID == id);
        return (
        <>
                {usuarioFilter.map((dato) => (
                <div key={dato.ID} className="contenedor-item">
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/assets/imagen.jpg" />
                    <Card.Body>
                    <Card.Title className='card-nombre' >NOMBRE:<br/>
                    {dato.NOMBRE}</Card.Title>
                    <Card.Text className='card-cargo'>
                    CARGO:{dato.CARGO}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    FECHA:{dato.FECHA}
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                
            ))};
        </>      
        );
    };   


export default ItemDetail;