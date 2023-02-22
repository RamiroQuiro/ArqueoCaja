import React from "react";

interface Props{
id:number,
idCajero:number,
idGabeta:number,
cantidadBilletes:number,
valorNominal:number,
totalDinero:number
}

export default function TablaGabetas({ gabetas }:any) {
  return (
    <table className="w-full text-sm rounded-lg overflow-hidden text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-center text-neutral-700 uppercase bg-gray-50 dark:bg-neutral-100 dark:text-neutral-700">
        <tr>
          <th scope="col" className="p-2">
            Id Gabeta
          </th>
          <th scope="col" className="p-2">
            Cantidad de Billetines
          </th>
          <th scope="col" className="p-2">
            Valor Nominal
          </th>
          <th scope="col" className="p-2">
            Total Dinero Gabeta
          </th>
        </tr>
      </thead>
      <tbody>
        {gabetas.map((gabeta:Props)=>(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           {gabeta.idGabeta}
          </th>
          <th>{gabeta.cantidadBilletes}</th>
          <th>{gabeta.valorNominal}</th>
          <th>{gabeta.totalDinero}</th>
        </tr>
        ))}
        
      
      </tbody>
    </table>
  );
}
