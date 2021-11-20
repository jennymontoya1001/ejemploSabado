import React from 'react';

const url = 'https://registrohooks.herokuapp.com/registros/';

export const Ejemplo = ({parametro}) => {

     const deleteData = (id) => {
        fetch(url+id,{
            method: 'DELETE'
        })
     }

    return (
        <div>
            <h1>Componente Ejemplo</h1>
            {
                parametro.map(data => (
                    <div key={data.id}> 
                    <h4>{data.id}</h4>
                        <h4>{data.nombre}</h4>
                        <img src={data.imagen} width="100"/>
                        <button onClick={() => deleteData(data.id)}>Eliminar</button>
                    
                    </div>
                ))
            }
        </div>
    )
}
