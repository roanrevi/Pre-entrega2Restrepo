import React from 'react'
import { useEffect,useState } from 'react';
import data from "../datos.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({greeting}) => {
    const{cargo}=useParams();
    const[loading, serLoading]=useState(true);
    const [personal, setPersonal]=useState([]);

            //console.log(personal);

            useEffect(()=>{
                async function fetchInfo(){
                    try{
                        const response= await fetch(data);
                        const data=await response.json();
                        setPersonal(data)
                        }
                        catch (error){
                            console.log(error)

                        }
                }
            fetchInfo();
            }, []); 
            const persFilter=data.filter((dato)=>dato.CARGO==cargo);
            //console.log(persFilter);
    return (        
        <>        
            <p>{greeting}</p>
            {
                <div>
                    {cargo?<ItemList datos={persFilter}/> :  <ItemList datos={data}/>}
                </div>                 
            }
        </>
    )
}



export default ItemListConteiner