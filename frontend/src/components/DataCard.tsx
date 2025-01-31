import React from 'react'

const DataCard = () => {
  return (
    <div className="w-[500px] h-44 shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)] bg-white rounded-xl grid grid-cols-4 grid-rows-4 gap-4">
      <h3 className="col-span-2 font-bold">Articulo:</h3>
      <h3 className="font-bold col-span-2 col-start-1 row-start-2">Persona Encargada:</h3>
      <p className="col-span-2 col-start-3 row-start-1">Motosierra Corta Ramas</p>
      <p className="col-span-2 col-start-3 row-start-2">Jose Carlos Fuentes</p>
      <h3 className="row-start-3 font-bold">Fecha de Prestamo:</h3>
      <p className="w-full h-full row-start-3">12/11/2024</p>
      <h3 className="row-start-3 font-bold">Fecha de Retorno:</h3>
      <p className="row-start-3">14/11/2024</p>
      <div className="w-full col-span-4 row-span-2 row-start-4 pt-1">
        <button className="w-[50%] h-full bg-sky-950 text-white rounded-bl-md">Editar</button>
        <button className="w-[50%] h-full bg-red-600 rounded-br-md text-white">Finalizado</button>
      </div>
    </div>
  );
}

export default DataCard